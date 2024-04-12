const jsonServer = require('json-server')
const {parse} = require("querystring");
const cors = require('cors');

const server = jsonServer.create()
const router = jsonServer.router('users.json')
const middlewares = jsonServer.defaults()
const PORT = 3001;

// Sử dụng middleware cors
server.use(cors());
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Add custom routes before JSON Server router
server.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = require('./users.json').users;
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Email hoặc mật khẩu không chính xác' });
    }
    res.status(200).json({ message: 'Đăng nhập thành công', user });
})

server.get('/api/users/filter', (req, res) => {
    const email = req.query.email;
    const users = require('./users.json').users;
    const userFilter = users.filter(user => user.email.includes(email));
    res.status(200).json(userFilter)
})

router.render = (req, res) => {
    const headers = res.getHeaders();
    const totalCount = headers['x-total-count'];
    if(req.originalMethod === 'GET' && totalCount){
        const queryParams = parse(req._parsedOriginalUrl.query);
        const result = {
            data: res.locals.data,
            pagination:{
                _page: Number.parseInt(queryParams._page) || 1,
                _limit: Number.parseInt(queryParams._limit) || 10,
                _totalRows: Number.parseInt(totalCount)
            }
        }
        return res.jsonp(result)
    }
    res.jsonp(res.locals.data)
}

server.use('/api', router)
server.listen(PORT, () => {
    console.log('JSON Server is running on port: ' + PORT)
})