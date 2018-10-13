import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState: {
    user: {
      role: 999
    }
  }
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/menus').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

