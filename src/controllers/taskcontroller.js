const controller = {};
controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM tasks1', (err, tasks)=>{
            if(err){
                res.json(err);
            }
            res.render('tasks', {
                data:tasks
            });
        });
    });
};


controller.save = (req, res)=>{
    const tarea = req.body;
    req.getConnection((err,conn)=>{
        conn.query('INSERT INTO tasks1 set ?', [tarea],(err, rows)=>{
            console.log(rows);
            res.send('works')
        })
    })
};


controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM tasks1 WHERE id = ?", [id], (err, rows) => {
        res.render('edit', {
          data: rows[0]
        })
      });
    });
  };
  
  controller.update = (req, res) => {
    const { id } = req.params;
    const newTask = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE tasks1 set ? where id = ?', [newTask, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };
  
  controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, connection) => {
      connection.query('DELETE FROM tasks1 WHERE id = ?', [id], (err, rows) => {
        res.redirect('/');
      });
    });
  }

module.exports = controller;