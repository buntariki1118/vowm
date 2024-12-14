// 参考
// https://qiita.com/y4u0t2a1r0/items/a6aea444efc8e8e65293
// https://qiita.com/dondoko-susumu/items/cf252bd6494412ed7847

const express = require('express')
const bodyParser = require('body-parser')
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors')
const mysql = require('mysql')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// mysqlの接続に必要な情報を記載する（それぞれ自身のmysql情報を入力していく）
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mysql'
})

// mysql接続
con.connect((err) => {
  if (err) throw err
  console.log('Mysql-Connected')
})

// mysqlからデータを取得
//DBからactor一覧を取得
app.get('/getActor', (req, res) => {
  const sql = 'select * from sakila.actor'

  // con.query()でsql文を実行して結果をresultに格納する
  con.query(sql, (err, result) => {
    // エラーが発生した場合はエラーメッセージを返す
    if (err) {
      return res.status(400).json({ error: err.message })
    }
    // エラーが発生しなかった場合はsql文で取得したデータを返す
    return res.json(result)
  })
})

app.get('/test', function (req, res) {
  res.send({
    message: 'Hello world!'
  })
})

app.post('/test2', function (req, res) {
  res.send({
    message: req.body.text
  })
})

app.listen(process.env.PORT || 3000)
