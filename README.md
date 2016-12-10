# vue-eventbus

## Install
```
$ npm i vue
$ npm i vue-evnetbus
```

## Usage
```
import Vue from 'vue'
import Eventbus from 'vue-eventbus'

Vue.use(Eventbus)
```

## API

### Vue#broadcast

Broadcast a global event.

### Vue#listen

Regist a vue-eventbus event listener.

### Vue#deafen

Dispose a vue-eventbus event listener.