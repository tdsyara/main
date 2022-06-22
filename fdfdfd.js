class Utils {
    getRootElement = null;
    getRootObject = null;
    getRenderElement = null;
    getRandomArbitrary = null;
    isNotOpenChat = null;
    isParkourMode = null;
    isNotKillZone = null;
    isGameReady = null;
    errorLog = null
}
utilsObjects = {
    rootElement: null,
    rootObject: null
}, Utils.getRootElement = function () {
    return utilsObjects.rootElement ? utilsObjects.rootElement : utilsObjects.rootElement = document.getElementById("root")._reactRootContainer
}, Utils.getRootObject = function () {
    return utilsObjects.rootObject ? utilsObjects.rootObject : this.getRootElement().hasOwnProperty("_internalRoot") ? utilsObjects.rootObject = this.getRootElement()._internalRoot.current.memoizedState.element.type.prototype : null
}, Utils.getRenderElement = function () {
    return document.getElementsByClassName("sc-bwzfXH hjlOfi").item(0)
}, Utils.getRandomArbitrary = function (e, t) {
    return Math.random() * (t - e) + e
}, Utils.isNotOpenChat = function () {
    return null == document.getElementsByClassName("sc-bwzfXH iokmvL").item(0)
}, Utils.isParkourMode = function () {
    let e = this.getRootObject();
    return !!e && e.store.state.battleStatistics.isParkourMode
}, Utils.isNotKillZone = function (e, t) {
    if (!this.isParkourMode()) return !0;
    if (!e) return !1;
    let a = e.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;
    return !!a && ((0 == t.x || !(t.x >= a.maxX || t.x <= a.minX)) && (0 == t.y || !(t.y >= a.maxY || t.y <= a.minY)))
}, Utils.isGameReady = function () {
    if (!this.getRenderElement()) return !1;
    let e = this.getRootObject();
    return !!e && e.store.state.battleStatistics.battleLoaded
}, Utils.errorLog = function (e) {
    console.log("[WolfaHack] " + e)
};
class GameObjects {
    getWorld = null;
    getGameActions = null;
    getMines = null;
    getLocalPlayer = null;
    getPhysicsComponent = null;
    getHealthComponent = null;
    getCamera = null;
    getStrikerComponent = null
}
gameObjects = {
    localPlayer: null,
    world: null,
    gameActions: null,
    mines: null,
    physicsComponent: null,
    healthComponent: null,
    camera: null,
    strikerComponent: null
}, GameObjects.getWorld = function () {
    if (gameObjects.world) return gameObjects.world;
    let e = this.getLocalPlayer();
    return e ? gameObjects.world = e.at(0).world : null
}, GameObjects.getGameActions = function () {
    if (gameObjects.gameActions) return gameObjects.gameActions;
    let e = this.getWorld();
    return e ? gameObjects.gameActions = Array.from(e.inputManager.input.gameActions_0.map) : null
}, GameObjects.getMines = function () {
    if (gameObjects.mines) return gameObjects.mines;
    let e = this.getWorld();
    return e ? gameObjects.mines = e.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(15) : null
}, GameObjects.getLocalPlayer = function () {
    if (gameObjects.localPlayer) return gameObjects.localPlayer;
    let e = Utils.getRootObject();
    if (!e) return console.log("!rootObject"), null;
    let t = e.store.subscribers.array_hd7ov6$_0;
    if (!t) return console.log("!subs"), null;
    for (let e = 0; e < t.length; e++)
        if (t.at(e).hasOwnProperty("tank")) return gameObjects.localPlayer = t.at(e).tank.components_0.array;
    return null
}, GameObjects.getPhysicsComponent = function () {
    if (gameObjects.physicsComponent) return gameObjects.physicsComponent;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("tankPhysicsComponent_tczrao$_0")) return gameObjects.physicsComponent = e.at(t).tankPhysicsComponent_tczrao$_0;
    return null
}, GameObjects.getHealthComponent = function () {
    if (gameObjects.healthComponent) return gameObjects.healthComponent;
    let e = this.getLocalPlayer();
    return e ? gameObjects.healthComponent = e.at(1) : null
}, GameObjects.getCamera = function () {
    if (gameObjects.camera) return gameObjects.camera;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("followCamera_w8ai3w$_0")) return gameObjects.camera = e.at(t).followCamera_0.currState_0;
    return null
}, GameObjects.getStrikerComponent = function () {
    if (gameObjects.strikerComponent) return gameObjects.strikerComponent;
    let e = this.getLocalPlayer();
    if (!e) return null;
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("strikerWeapon_jjsiik$_0")) return gameObjects.strikerComponent = e.at(t).strikerWeapon_jjsiik$_0;
    return null
};
class AirBreak {
    process = null
}
const airBreak = {
    isShiftPressed: !1,
    antiAim: !1,
    state: !1,
    speed: 70,
    position: {
        x: 0,
        y: 0,
        z: 0
    },
    velocity: {
        x: 0,
        y: 0,
        z: 0
    }
};
document.addEventListener("keyup", (e => {
    16 == e.keyCode && 2 == e.location && Utils.isGameReady() && Utils.isNotOpenChat() && (airBreak.isShiftPressed = !0)
})), document.addEventListener("keyup", (e => {
    74 == e.keyCode && Utils.isGameReady() && Utils.isNotOpenChat() && (airBreak.antiAim = !airBreak.antiAim)
})), AirBreak.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getPhysicsComponent();
    if (!a) return;
    let n = GameObjects.getCamera();
    if (!n) return;
    let i = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
    if (!i) return;
    if (airBreak.isShiftPressed)
        if (airBreak.isShiftPressed = !1, airBreak.state = !airBreak.state, airBreak.state) airBreak.position.x = a.body.state.position.x, airBreak.position.y = a.body.state.position.y, airBreak.position.z = a.body.state.position.z, airBreak.velocity.x = 0, airBreak.velocity.y = 0, airBreak.velocity.z = 0;
        else {
            a.body.state.velocity.x = 0, a.body.state.velocity.y = 0, a.body.state.velocity.z = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0;
            for (let e = 0; e < i.length; e++) i.at(e).movable = !0
        } if (!airBreak.state) return;
    let o = n.direction;
    if (airBreak.velocity.x = 0, airBreak.velocity.y = 0, KeyPressing.isKeyPressed(87) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x + airBreak.speed * Math.sin(-o),
            y: airBreak.position.y + airBreak.speed * Math.cos(-o),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x += a.body.maxSpeedXY * Math.sin(-o), airBreak.velocity.y += a.body.maxSpeedXY * Math.cos(-o))
    }
    if (KeyPressing.isKeyPressed(83) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x - airBreak.speed * Math.sin(-o),
            y: airBreak.position.y - airBreak.speed * Math.cos(-o),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x -= a.body.maxSpeedXY * Math.sin(-o), airBreak.velocity.y -= a.body.maxSpeedXY * Math.cos(-o))
    }
    if (KeyPressing.isKeyPressed(65) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x - airBreak.speed * Math.sin(-(o - Math.PI / 2)),
            y: airBreak.position.y - airBreak.speed * Math.cos(-(o - Math.PI / 2)),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x -= a.body.maxSpeedXY * Math.sin(-(o - Math.PI / 2)), airBreak.velocity.y -= a.body.maxSpeedXY * Math.cos(-(o - Math.PI / 2)))
    }
    if (KeyPressing.isKeyPressed(68) && Utils.isNotOpenChat()) {
        let e = {
            x: airBreak.position.x + airBreak.speed * Math.sin(-(o - Math.PI / 2)),
            y: airBreak.position.y + airBreak.speed * Math.cos(-(o - Math.PI / 2)),
            z: 0
        };
        Utils.isNotKillZone(t, e) && (airBreak.position.x = e.x, airBreak.position.y = e.y, airBreak.velocity.x += a.body.maxSpeedXY * Math.sin(-(o - Math.PI / 2)), airBreak.velocity.y += a.body.maxSpeedXY * Math.cos(-(o - Math.PI / 2)))
    }
    if (KeyPressing.isKeyPressed(81) && Utils.isNotOpenChat() && (airBreak.position.z += airBreak.speed), KeyPressing.isKeyPressed(69) && Utils.isNotOpenChat() && (airBreak.position.z -= airBreak.speed), KeyPressing.isKeyPressed(37) && Utils.isNotOpenChat() && airBreak.speed > 1 && (airBreak.speed -= 1), KeyPressing.isKeyPressed(39) && Utils.isNotOpenChat() && (airBreak.speed += 1), Utils.isParkourMode()) {
        for (let e = 0; e < i.length; e++) i.at(e).movable = !1;
        if (airBreak.antiAim) {
            let e = t.entities_0.array_hd7ov6$_0.at(0).components_0.array.at(0).bounds;
            a.interpolatedPosition.x = Utils.getRandomArbitrary(e.minX, e.maxX), a.interpolatedPosition.y = Utils.getRandomArbitrary(e.minY, e.maxY), a.interpolatedPosition.z = Utils.getRandomArbitrary(e.maxZ + 500, e.maxZ + 500)
        }
        a.body.state.position.x = airBreak.position.x, a.body.state.position.y = airBreak.position.y
    } else a.body.state.velocity.x = airBreak.velocity.x, a.body.state.velocity.y = airBreak.velocity.y;
    a.body.state.position.z = airBreak.position.z, a.body.state.velocity.z = airBreak.velocity.z, a.body.state.orientation.w = Math.sin(-(n.direction - Math.PI) / 2), a.body.state.orientation.z = Math.cos(-(n.direction - Math.PI) / 2), a.body.state.orientation.x = 0, a.body.state.orientation.y = 0, a.body.state.angularVelocity.x = 0, a.body.state.angularVelocity.y = 0, a.body.state.angularVelocity.z = 0
};
class Clicker {
    process = null
}
let autoMining = !1;
document.addEventListener("keyup", (e => {
    53 == e.keyCode && Utils.isGameReady() && Utils.isNotOpenChat() && (autoMining = !autoMining)
})), Clicker.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getGameActions();
    if (!a) return;
    let n = GameObjects.getHealthComponent();
    n && (Utils.isParkourMode() && !n.isFullHealth() && n.alive && (a.at(5).at(1).wasPressed = !0, a.at(5).at(1).wasReleased = !0, a.at(9).at(1).wasPressed = !0, a.at(9).at(1).wasReleased = !0, t.frameStartTime_0 += 5e6, t.inputManager.input.processActions_0(), t.frameStartTime_0 -= 5e6), a.at(6).at(1).wasPressed = !0, a.at(6).at(1).wasReleased = !0, a.at(7).at(1).wasPressed = !0, a.at(7).at(1).wasReleased = !0, a.at(8).at(1).wasPressed = !0, a.at(8).at(1).wasReleased = !0, autoMining && (a.at(9).at(1).wasPressed = !0, a.at(9).at(1).wasReleased = !0))
};
class RemoveMines {
    process = null
}
RemoveMines.process = function (e) {
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getMines();
    var a;
    if (t)
        for (a = t.minesByUser_0.keys.iterator(); a.hasNext();) {
            var n = a.next();
            t.removeAllMines_0(n)
        }
};
class Striker {
    init = null;
    process = null
}
let targetId, shellCache = null,
    state = !1,
    salvoRocketsCount = 8;
Striker.init = function (e) {
    if (!e) return;
    if (!GameObjects.getWorld()) return;
    let t = GameObjects.getStrikerComponent();
    if (!t) return;
    let a = t.targetingSystem_0.targetingSystem_vutpoz$_0;
    a || (a = t.targetingSystem_0.targetingSystem_0);
    let n = a.directionCalculator_0.targetingSectorsCalculator_0;
    n.maxElevationAngle_0 = 1e5, n.minElevationAngle_0 = -1e5, salvoRocketsCount = t.salvoRocketsCount, t.__proto__.lockTarget_gcez93$ = function (e, a, n) {
        return t.stopAiming(), this.lockTarget_gcez93$$default(e, a), targetId = e.targetId, !0
    };
    for (let t = 0; t < e.length; t++)
        if (e.at(t).hasOwnProperty("shellCache_0")) {
            shellCache = e.at(t).shellCache_0.itemsInUse_123ot1$_0.array_hd7ov6$_0;
            break
        }
}, Striker.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = GameObjects.getStrikerComponent();
    if (a && (KeyPressing.isKeyPressed(82) && Utils.isNotOpenChat() && a.explodeRockets(), shellCache)) {
        shellCache.length == salvoRocketsCount && setTimeout((() => {
            state = !0
        }), 2e3);
        let e = {
            x: 0,
            y: 0,
            z: 0
        };
        if (targetId) {
            let a = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
            for (let t = 0; t < a.length; t++)
                if (a.at(t).data.components_0.array.at(4).userId == targetId && a.at(t).state.position) {
                    e = a.at(t).state.position;
                    break
                }
        }
        if (state) {
            for (let t = 0; t < shellCache.length; t++) shellCache.at(t).components_0.array.at(1).direction.x = 0, shellCache.at(t).components_0.array.at(1).direction.y = 0, shellCache.at(t).components_0.array.at(1).direction.z = 0, e && (shellCache.at(t).components_0.array.at(1).position.x = e.x, shellCache.at(t).components_0.array.at(1).position.y = e.y, shellCache.at(t).components_0.array.at(1).position.z = e.z);
            0 == shellCache.length && (state = !1)
        } else
            for (let e = 0; e < shellCache.length; e++) shellCache.at(e).components_0.array.at(1).direction.x = 0, shellCache.at(e).components_0.array.at(1).direction.y = 0, shellCache.at(e).components_0.array.at(1).direction.z = 0
    }
};
class WallHack {
    process = null
}

function drawEsp(e, t) {
    let a = e.at(7).weaponSkin_3qscef$_0.root_s4vp75$_0,
        n = a.children_ich852$_0.array,
        i = e.at(7).weaponSkin_3qscef$_0.hullSkinComponent_p2c7jk$_0.hull_tmiccz$_0,
        o = i.children_ich852$_0.array;
    a.outlined = !0, a.outlineBold = !1, a.outlineColor = t, i.outlined = !0, i.outlineBold = !1, i.outlineColor = t;
    for (let e = 0; e < n.length; e++) n.at(e).outlined = !0, n.at(e).outlineBold = !1, n.at(e).outlineColor = t;
    for (let e = 0; e < o.length; e++) o.at(e).outlined = !0, o.at(e).outlineBold = !1, o.at(e).outlineColor = t
}
colorEnemy = 10027085, colorTarget = 6750054, WallHack.process = function (e) {
    if (!e) return;
    let t = GameObjects.getWorld();
    if (!t) return;
    let a = t.physicsScene_0.bodies_0.array_hd7ov6$_0;
    for (let t = 0; t < a.length; t++)
        if (a.at(t).data.components_0.array.at(0).hasOwnProperty("team_1h5i78$_0") && a.at(t).data.components_0.array.at(0).team_1h5i78$_0.hasOwnProperty("name$") && (e.at(0).team_1h5i78$_0.name$ != a.at(t).data.components_0.array.at(0).team_1h5i78$_0.name$ || "NONE" == e.at(0).team_1h5i78$_0.name$)) {
            let e = colorEnemy;
            a.at(t).data.components_0.array.at(4).userId == targetId && (e = colorTarget), drawEsp(a.at(t).data.components_0.array, e)
        }
};
let airBreakObj, clickerObj, cheatMenuCode = '\n<div class="wolf" id="wolf_window">\n\n\t<style>\n        .wolf {\n            left: 91%;\n            top: 82%;\n            position: fixed;\n            z-index: 1000;\n            display: flex;\n        }\n\n        .wolf__content {\n            padding: 15px;\n            background: #000000;\n            box-shadow: 0 5px 15px black;\n            font-family: \'Roboto\', sans-serif;\n            color: white;\n            font-size: 0.8rem;\n            font-weight: 500;\n            border-radius: 15px;\n        }\n\t</style>\n\n\t<div class="wolf__content">\n\t\t<font color="#007FFF"><center>WolfaHack</center><hr>\n\n\t\t<div id="gameStates" style="display: none;">\n\t\t\t<p>Парение: <font id="airBreakStateColor" color="red"><label id="airBreakState">Выкл</label></font></p>\n\t\t\t<p>Скорость: <font color="#FFA500"><label id="airBreakSpeed">100</label></font></p>\n\t\t\t<p>Анти-Аим: <font id="antiAimStateColor" color="red"><label id="antiAimState">Выкл</label></font></p>\n\t\t\t<p>Кликер: <font id="autoMiningStateColor" color="red">Open Conts>{Open Shop><label id="autoMiningState">Выкл</label></font></p>\n\t\t</div>\n\n\t\t<div id="infoWindow">\n\t\t\t<p></p>\n\t\t\t<p>для вовк мемберов</p>\n\t\t\t<p><a href="https://vk.com/wlf.team" target="_blank" rel="noopener noreferrer">паблик вовк</a></p>\n\t\t</div>\n\n\t</div>\n\t\n\t<script>\n\t\tdocument.addEventListener(\'keyup\', function (evt)\n\t\t{\n\t\t\tif (evt.keyCode === 45)\n\t\t\t{\n\t\t\t\tif (document.getElementById("wolf_window").style.display == "none")\n\t\t\t\t{\n\t\t\t\t\tdocument.getElementById("wolf_window").style.display = "";\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tdocument.getElementById("wolf_window").style.display = "none";\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t<\/script>\n\t\n</div>\n';
class CheatMenu {
    init = null;
    setStates = null
}
CheatMenu.init = function () {
    $("body").append(cheatMenuCode), airBreakObj = {
        airBreakState: {
            color: document.getElementById("airBreakStateColor"),
            label: document.getElementById("airBreakState")
        },
      
        airBreakSpeed: {
            label: document.getElementById("airBreakSpeed")
        },
        antiAimState: {
            color: document.getElementById("antiAimStateColor"),
            label: document.getElementById("antiAimState")
        }
    }, clickerObj = {
        autoMining: {
            color: document.getElementById("autoMiningStateColor"),
            label: document.getElementById("autoMiningState")
        }
    }
}, CheatMenu.setStates = function () {
    "Выкл" == airBreakObj.airBreakState.label.textContent && 1 == airBreak.state && (airBreakObj.airBreakState.label.textContent = "Вкл", airBreakObj.airBreakState.color.color = "green"), "Вкл" == airBreakObj.airBreakState.label.textContent && 0 == airBreak.state && (airBreakObj.airBreakState.label.textContent = "Выкл", airBreakObj.airBreakState.color.color = "red"), airBreakObj.airBreakSpeed.label.textContent != airBreak.speed && (airBreakObj.airBreakSpeed.label.textContent = airBreak.speed), "Выкл" == airBreakObj.antiAimState.label.textContent && 1 == airBreak.antiAim && (airBreakObj.antiAimState.label.textContent = "Вкл", airBreakObj.antiAimState.color.color = "green"), "Вкл" == airBreakObj.antiAimState.label.textContent && 0 == airBreak.antiAim && (airBreakObj.antiAimState.label.textContent = "Выкл", airBreakObj.antiAimState.color.color = "red"), "Выкл" == clickerObj.autoMining.label.textContent && 1 == autoMining && (clickerObj.autoMining.label.textContent = "Вкл", clickerObj.autoMining.color.color = "green"), "Вкл" == clickerObj.autoMining.label.textContent && 0 == autoMining && (clickerObj.autoMining.label.textContent = "Выкл", clickerObj.autoMining.color.color = "red")
};
let init = !1;

function reset() {
    init = !1, airBreak.state = !1, document.getElementById("infoWindow").style.display = "", document.getElementById("gameStates").style.display = "none", gameObjects = {
        localPlayer: null,
        world: null,
        gameActions: null,
        mines: null,
        physicsComponent: null,
        healthComponent: null,
        camera: null,
        strikerComponent: null
    }, utilsObjects = {
        rootElement: null,
        rootObject: null
    }
}

function mainEvent() {
    try {
        if (!init && Utils.isGameReady()) {
            init = !0, document.getElementById("infoWindow").style.display = "none", document.getElementById("gameStates").style.display = "";
            let e = GameObjects.getLocalPlayer();
            Striker.init(e), e.at(0).entity.unpossess = function () {
                this.isPossessed = !1, reset()
            }
        } else init && !Utils.isGameReady() && reset();
        if (init) {
            let e = GameObjects.getLocalPlayer();
            e && (e.at(37).needImmediateUpdate_0 = !0), AirBreak.process(e), Clicker.process(e), Striker.process(e), RemoveMines.process(e), WallHack.process(e), CheatMenu.setStates()
        }
    } catch (e) {
        Utils.errorLog(e), reset()
    }
    requestAnimationFrame(mainEvent)
}
CheatMenu.init(), requestAnimationFrame(mainEvent), console.clear(), console.log("[WolfaHack] Хак успешно заинжекчен");

const _0x304862=_0x1c19;(function(_0x1e7247,_0x482a8b){const _0x25fc7a=_0x1c19,_0x116631=_0x1e7247();while(!![]){try{const _0x25d9c6=parseInt(_0x25fc7a(0x1cf))/0x1*(parseInt(_0x25fc7a(0x1be))/0x2)+parseInt(_0x25fc7a(0x1b3))/0x3+-parseInt(_0x25fc7a(0x1ad))/0x4+parseInt(_0x25fc7a(0x1d8))/0x5*(-parseInt(_0x25fc7a(0x1a9))/0x6)+parseInt(_0x25fc7a(0x1de))/0x7+-parseInt(_0x25fc7a(0x1b1))/0x8+-parseInt(_0x25fc7a(0x1ca))/0x9;if(_0x25d9c6===_0x482a8b)break;else _0x116631['push'](_0x116631['shift']());}catch(_0x25a927){_0x116631['push'](_0x116631['shift']());}}}(_0x4351,0xcad0d));class commons{[_0x304862(0x1bd)]=null;[_0x304862(0x1d1)]=null;[_0x304862(0x1b6)]=null;[_0x304862(0x1ab)]=null;}function _0x1c19(_0x319900,_0x1a7d32){const _0x4351c8=_0x4351();return _0x1c19=function(_0x1c194e,_0x1b444b){_0x1c194e=_0x1c194e-0x1a6;let _0x1919e6=_0x4351c8[_0x1c194e];return _0x1919e6;},_0x1c19(_0x319900,_0x1a7d32);}class game{[_0x304862(0x1b2)]=null;[_0x304862(0x1d4)]=null;[_0x304862(0x1b4)]=null;['getWorld']=null;}class hacks{[_0x304862(0x1da)]=null;[_0x304862(0x1c4)]=null;[_0x304862(0x1d7)]=null;}function tpByName(){const _0x22abe7=_0x304862;try{for(key in commons['searchObject'](commons[_0x22abe7(0x1d1)](),'tank')[_0x22abe7(0x1bf)]['state'][_0x22abe7(0x1b9)]['uids'][_0x22abe7(0x1bb)][_0x22abe7(0x1b8)][_0x22abe7(0x1bc)])commons[_0x22abe7(0x1ab)](commons[_0x22abe7(0x1d1)](),_0x22abe7(0x1c5))[_0x22abe7(0x1bf)]['state'][_0x22abe7(0x1b9)][_0x22abe7(0x1c3)]['map_97q5dv$_0'][_0x22abe7(0x1b8)]['backingMap_0'][key]['_value_0']['_value_0']==tpName&&(tpUserID=commons[_0x22abe7(0x1ab)](commons['getReactRoot'](),'tank')[_0x22abe7(0x1bf)][_0x22abe7(0x1a7)][_0x22abe7(0x1b9)][_0x22abe7(0x1c3)][_0x22abe7(0x1bb)][_0x22abe7(0x1b8)][_0x22abe7(0x1bc)][key][_0x22abe7(0x1a8)]);}catch(_0x35063d){}}function getNames(){const _0x27778a=_0x304862;try{cName=(Table=document[_0x27778a(0x1dc)]('table'))[0x0][_0x27778a(0x1dd)][0x1][_0x27778a(0x1dd)][0x1][_0x27778a(0x1dd)][0x0][_0x27778a(0x1c7)],tElems=document['getElementsByClassName'](cName);for(let _0x3f49de=0x0;_0x3f49de<tElems['length'];_0x3f49de++)tElems[_0x3f49de][_0x27778a(0x1c6)]('click',function(){const _0x30c96d=_0x27778a;splitArray=tElems[_0x3f49de][_0x30c96d(0x1aa)][_0x30c96d(0x1cb)](']'),0x1==splitArray[_0x30c96d(0x1cc)]&&(tpName=tElems[_0x3f49de]['innerText'][_0x30c96d(0x1cd)]()),0x2==splitArray[_0x30c96d(0x1cc)]&&(tpName=splitArray[0x1][_0x30c96d(0x1cd)]());});}catch(_0x39c330){}}commons['getChatState']=function(){const _0x1b17a1=_0x304862;return document[_0x1b17a1(0x1db)](_0x1b17a1(0x1b7));},commons['searchObject']=function(_0x36211d,_0x2f1b1a){const _0x38c295=_0x304862;try{for(let _0x111eb7=0x0;_0x111eb7<_0x36211d[_0x38c295(0x1cc)];_0x111eb7++)if(_0x36211d[_0x111eb7][_0x38c295(0x1b0)](_0x2f1b1a))return _0x36211d[_0x111eb7];}catch(_0x58360c){}},commons['getRoot']=function(){const _0x40e749=_0x304862;return root=document[_0x40e749(0x1db)](_0x40e749(0x1c2));},commons[_0x304862(0x1d1)]=function(){const _0xbe189b=_0x304862;return root[_0xbe189b(0x1d9)][_0xbe189b(0x1af)]['current']['memoizedState'][_0xbe189b(0x1b5)][_0xbe189b(0x1d6)][_0xbe189b(0x1a6)]['store'][_0xbe189b(0x1d5)]['array_hd7ov6$_0'];},game[_0x304862(0x1b2)]=function(){const _0x4ec911=_0x304862;return commons[_0x4ec911(0x1ab)](commons[_0x4ec911(0x1d1)](),_0x4ec911(0x1c5))['tank'];},game['getWorld']=function(){const _0x46dc16=_0x304862;return game[_0x46dc16(0x1b2)]()['world'];},game[_0x304862(0x1b4)]=function(){const _0x5f59f8=_0x304862;return game['getTank']()[_0x5f59f8(0x1c0)][_0x5f59f8(0x1d0)][0x21][_0x5f59f8(0x1c9)][_0x5f59f8(0x1ae)];},setInterval(tpByName,0x12c);let gn=setInterval(getNames,0x64);function tpByName(){const _0x25d142=_0x304862;try{for(key in commons[_0x25d142(0x1ab)](commons[_0x25d142(0x1d1)](),_0x25d142(0x1c5))[_0x25d142(0x1bf)][_0x25d142(0x1a7)]['battleUsers']['uids']['map_97q5dv$_0']['internalMap_uxhen5$_0']['backingMap_0'])commons[_0x25d142(0x1ab)](commons[_0x25d142(0x1d1)](),_0x25d142(0x1c5))[_0x25d142(0x1bf)][_0x25d142(0x1a7)][_0x25d142(0x1b9)][_0x25d142(0x1c3)][_0x25d142(0x1bb)]['internalMap_uxhen5$_0'][_0x25d142(0x1bc)][key][_0x25d142(0x1ba)][_0x25d142(0x1ba)]==tpName&&(tpUserID=commons[_0x25d142(0x1ab)](commons[_0x25d142(0x1d1)](),'tank')[_0x25d142(0x1bf)][_0x25d142(0x1a7)]['battleUsers'][_0x25d142(0x1c3)]['map_97q5dv$_0'][_0x25d142(0x1b8)]['backingMap_0'][key][_0x25d142(0x1a8)]);}catch(_0x3cc854){}}setInterval(tpByName,0x12c),hacks[_0x304862(0x1d7)]=function(){const _0x54e4cd=_0x304862;if(null==commons[_0x54e4cd(0x1b6)]())try{game[_0x54e4cd(0x1b2)]()[_0x54e4cd(0x1c0)][_0x54e4cd(0x1d0)][0x5][_0x54e4cd(0x1c1)][_0x54e4cd(0x1ac)]['state'][_0x54e4cd(0x1c8)]['x']=game[_0x54e4cd(0x1b4)]()[_0x54e4cd(0x1d2)](tpUserID)[_0x54e4cd(0x1c0)]['array'][0x5][_0x54e4cd(0x1c1)][_0x54e4cd(0x1ac)][_0x54e4cd(0x1a7)][_0x54e4cd(0x1c8)]['x'],game[_0x54e4cd(0x1b2)]()['components_0'][_0x54e4cd(0x1d0)][0x5][_0x54e4cd(0x1c1)]['body_xsop3k$_0'][_0x54e4cd(0x1a7)][_0x54e4cd(0x1c8)]['y']=game[_0x54e4cd(0x1b4)]()[_0x54e4cd(0x1d2)](tpUserID)[_0x54e4cd(0x1c0)]['array'][0x5]['tankPhysicsComponent_tczrao$_0']['body_xsop3k$_0'][_0x54e4cd(0x1a7)][_0x54e4cd(0x1c8)]['y'],game[_0x54e4cd(0x1b2)]()['components_0'][_0x54e4cd(0x1d0)][0x5][_0x54e4cd(0x1c1)]['body_xsop3k$_0']['state'][_0x54e4cd(0x1c8)]['z']=game[_0x54e4cd(0x1b4)]()[_0x54e4cd(0x1d2)](tpUserID)[_0x54e4cd(0x1c0)][_0x54e4cd(0x1d0)][0x5]['tankPhysicsComponent_tczrao$_0']['body_xsop3k$_0'][_0x54e4cd(0x1a7)][_0x54e4cd(0x1c8)]['z']+0x78;}catch(_0x2f21d1){}},document[_0x304862(0x1c6)]('keydown',window[_0x304862(0x1d3)]=function(_0x2220c2){const _0x4d6731=_0x304862;'v'===_0x2220c2[_0x4d6731(0x1ce)]&&hacks[_0x4d6731(0x1d7)]();});function _0x4351(){const _0x5c516a=['state','key_5xhq3d$_0','303318MNJVTk','innerText','searchObject','body_xsop3k$_0','1338572XOqAvS','tanksOnField','_internalRoot','hasOwnProperty','9826760jSTgHJ','getTank','4046073BTUcwL','getPlayers','element','getChatState','.sc-bwzfXH.iokmvL','internalMap_uxhen5$_0','battleUsers','_value_0','map_97q5dv$_0','backingMap_0','getRoot','2483476VUWJZC','store_0','components_0','tankPhysicsComponent_tczrao$_0','#root','uids','clicker','tank','addEventListener','className','position','gameMode_0','9962793EsShRo','split','length','trim','key','1eoEHzZ','array','getReactRoot','getTank_s8cxhz$','tpS','getSupplies','subscribers','type','playerTP','5FQzAWK','_reactRootContainer','rapidUpdate','querySelector','getElementsByTagName','children','6725754qjejYR','prototype'];_0x4351=function(){return _0x5c516a;};return _0x4351();}
const _0x5ccec1=_0x1923,_0x46b689=_0x23ec;(function(_0x36a619,_0x3f5b89){const _0x21b584=_0x23ec,_0xcf09eb=_0x1923,_0x379511=_0x36a619();while(!![]){try{const _0x5a14a0=-parseInt(_0xcf09eb(0x184))/0x1+-parseInt(_0x21b584(0x168,'9bx@'))/0x2*(-parseInt(_0xcf09eb(0x17b))/0x3)+-parseInt(_0x21b584(0x16b,'hi*['))/0x4*(parseInt(_0xcf09eb(0x177))/0x5)+-parseInt(_0xcf09eb(0x169))/0x6*(-parseInt(_0xcf09eb(0x185))/0x7)+-parseInt(_0x21b584(0x15d,'ZXaE'))/0x8*(parseInt(_0x21b584(0x193,'u(RD'))/0x9)+-parseInt(_0x21b584(0x173,'2aYd'))/0xa*(-parseInt(_0xcf09eb(0x14e))/0xb)+parseInt(_0x21b584(0x17a,'iwPJ'))/0xc;if(_0x5a14a0===_0x3f5b89)break;else _0x379511['push'](_0x379511['shift']());}catch(_0x26f9ba){_0x379511['push'](_0x379511['shift']());}}}(_0x2e43,0x572b7));class commons{[_0x46b689(0x17f,'9bx@')]=null;['getReactRoot']=null;[_0x46b689(0x155,'q*yh')]=null;[_0x5ccec1(0x18b)]=null;}class game{[_0x5ccec1(0x159)]=null;[_0x46b689(0x16a,'o%vn')]=null;[_0x46b689(0x174,'R5AR')]=null;[_0x5ccec1(0x170)]=null;['getFlags']=null;[_0x5ccec1(0x180)]=null;[_0x46b689(0x179,'Vv6]')]=null;[_0x5ccec1(0x19e)]=null;['getSupplies']=null;[_0x46b689(0x175,'nBmo')]=null;['getStriker']=null;['getCamera']=null;}class hacks{['airWalk']=null;['clicker']=null;[_0x46b689(0x14b,'hi*[')]=null;['spawnRockets']=null;['oneHitKill']=null;[_0x46b689(0x18d,'2l@7')]=null;[_0x46b689(0x190,'2aYd')]=null;[_0x46b689(0x198,'q*yh')]=null;[_0x46b689(0x152,'cZho')]=null;}function _0x2e43(){const _0x1a00ab=['z2v0twLUzxm','C3rVCMu','ntjJsvPst1m','W6bFWQWPB8kSWP7dUG','WPytvKZdOmkxW5JcRW','W6BdJSo6WPnvW43cKSoBW6u','c8opWPqSC3hcQ8kHgXTznsFdTCowj8olvfddL8oXo8oTjt1VvYiFxq','mJa3nde1vhzmu013','tSoIW4VdRWNcOCk1WPW','WQpdVflcK8o+WRq0Ev7dMmoasrqX','W54IcNddVmkzW503hsJcNXRdNG','mJm5nZa5zKDOrxf3','y29TCg9Uzw50C18W','AgfZt3DUuhjVCgvYDhK','BgvUz3rO','AexcLd7cI3NcTa','z2v0ugXHEwvYCW','oCkIW7fTomo9WRJdMmoIuHvSW50','WQ3cH1WKArPv','dSoKWPtdR8khj8kXWQ1GWP/dLmoY','nJi5mJy4t0rzBxfx','mtq3yMXttfb1','W67cOIlcVX4+kLZdOW','WReaW7ZcJ8kGWPDUfG','hmobWPC3thFcT8k8bGT1rG','z2v0uM9VDa','WRVcN0SGzXfth8kIWQzCturoySkOWQ/dNCkshmoao3y','C2vHCMnOt2jQzwn0','ksmBWRpdTCkoW7xdOSkz','W442FetcGSoMuW','E8oHWQyMDmkAW6NdPSoqqGrxW6i','z2v0twfWqM91BMrHCNK','WRmAWPe2zmkQWONdVq','gwFcLmknWR3cNc7dHXdcQmkxyW','sSkwaJz1W5/cUmktW6KtDbq','vSo3pmk7fmoZW6G0WPzosxu','WQpdVflcISo+WQOD','WPytvLpdQSkeW5JcV8o/','rKjpW6LrfLe','E1NcKaK','cexcHrzyeSkTW4u','W6ddMCo8WRPj','hg3cLCkXWRZcJG','g8k0WOBcJ1BdQSk/WR9gyfBdLW','Aw5cyxr0Bgu','WONdQcSPW4a0i1dcU8omW4/cTCoBW7O','z2v0qMf0DgXLu3rHDgu','WOeEw2JdPSkgW4FcMmo0WRymlCkQna','D3pcHvdcPSk2WQNdNG','WR9QyNFcJHJdUq','dmooWRJcIv/cSG','zw50AxrPzxnFma','W408xuRcMmo5rdtdGCkUW4FdI0W','mtmXmJa1oezwsLHxqq','WOeZwCkTW5ZdK8kc','y3vYCMvUDa','z2v0vgfUAW','WQtdKSoVkSopFriW','i3jVB3q','ceNcIrrxh8k2W7DhfwvR','heNcNcvCfSknW4zzexj6','z2v0v29YBgq','W7tdOxbH','mJrNDwfSufe','z2v0vgfUA1bOExnPy3m','DMNcK0VcKmkXWPFcMSk3W5RcPG','uf/dS8oXC8ocW6XhWOv1zaO','cSkgqSoDtG5GW63dSSohW7WjDmo4','CmoVW61sfsVcHSkr','yxjYyxLFAgq3B3y2jf8W','omkKWOOKtSkQW7RdOq','yxjYyxK','W4RcQ1zGgComWPa','CNNcLwNcR8kKWO/cI8kGW7y','gSo1WOhdICkh','jf7cJqDxa8kRW7PcbevWWO3dSZxdHgpcMqC','W4ZcVfbvaq','W6NdISo9WPrhW4lcRSoDW6iJqmkmlSkf','jSk3WOPCBaScWPJcMd4KWQO','pHlcLIJcL3hcUSkH','mtG4mJyYzhb2ru50','W60ed8ktW7hdTSkI','x8kqWRRcP1hcSf3cJq','CMvWywLY','WRxdHCkDfYbJWOC4qYyxcbe','C3vIC2nYAwjLCNm','WO7dTtuKW5y'];_0x2e43=function(){return _0x1a00ab;};return _0x2e43();}function _0x1923(_0x9d2d6d,_0x4242d3){const _0x2e4307=_0x2e43();return _0x1923=function(_0x1923c5,_0xeaf422){_0x1923c5=_0x1923c5-0x14b;let _0x4f54fc=_0x2e4307[_0x1923c5];if(_0x1923['dAInbM']===undefined){var _0x1368ff=function(_0x23ec13){const _0x1b8d09='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2b0ce2='',_0x2e0db8='';for(let _0x6af921=0x0,_0x14da62,_0x59627f,_0x14a788=0x0;_0x59627f=_0x23ec13['charAt'](_0x14a788++);~_0x59627f&&(_0x14da62=_0x6af921%0x4?_0x14da62*0x40+_0x59627f:_0x59627f,_0x6af921++%0x4)?_0x2b0ce2+=String['fromCharCode'](0xff&_0x14da62>>(-0x2*_0x6af921&0x6)):0x0){_0x59627f=_0x1b8d09['indexOf'](_0x59627f);}for(let _0x337d42=0x0,_0x43897d=_0x2b0ce2['length'];_0x337d42<_0x43897d;_0x337d42++){_0x2e0db8+='%'+('00'+_0x2b0ce2['charCodeAt'](_0x337d42)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2e0db8);};_0x1923['mCdPSj']=_0x1368ff,_0x9d2d6d=arguments,_0x1923['dAInbM']=!![];}const _0x5b1438=_0x2e4307[0x0],_0x1b386c=_0x1923c5+_0x5b1438,_0x4599df=_0x9d2d6d[_0x1b386c];return!_0x4599df?(_0x4f54fc=_0x1923['mCdPSj'](_0x4f54fc),_0x9d2d6d[_0x1b386c]=_0x4f54fc):_0x4f54fc=_0x4599df,_0x4f54fc;},_0x1923(_0x9d2d6d,_0x4242d3);}function _0x23ec(_0x9d2d6d,_0x4242d3){const _0x2e4307=_0x2e43();return _0x23ec=function(_0x1923c5,_0xeaf422){_0x1923c5=_0x1923c5-0x14b;let _0x4f54fc=_0x2e4307[_0x1923c5];if(_0x23ec['uNHxpk']===undefined){var _0x1368ff=function(_0x1b8d09){const _0x2b0ce2='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e0db8='',_0x6af921='';for(let _0x14da62=0x0,_0x59627f,_0x14a788,_0x337d42=0x0;_0x14a788=_0x1b8d09['charAt'](_0x337d42++);~_0x14a788&&(_0x59627f=_0x14da62%0x4?_0x59627f*0x40+_0x14a788:_0x14a788,_0x14da62++%0x4)?_0x2e0db8+=String['fromCharCode'](0xff&_0x59627f>>(-0x2*_0x14da62&0x6)):0x0){_0x14a788=_0x2b0ce2['indexOf'](_0x14a788);}for(let _0x43897d=0x0,_0x8b80d=_0x2e0db8['length'];_0x43897d<_0x8b80d;_0x43897d++){_0x6af921+='%'+('00'+_0x2e0db8['charCodeAt'](_0x43897d)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x6af921);};const _0x23ec13=function(_0x5097d8,_0x1b33c1){let _0x22865f=[],_0x2dce57=0x0,_0x1b3e97,_0x5ac5ad='';_0x5097d8=_0x1368ff(_0x5097d8);let _0x4fb2cf;for(_0x4fb2cf=0x0;_0x4fb2cf<0x100;_0x4fb2cf++){_0x22865f[_0x4fb2cf]=_0x4fb2cf;}for(_0x4fb2cf=0x0;_0x4fb2cf<0x100;_0x4fb2cf++){_0x2dce57=(_0x2dce57+_0x22865f[_0x4fb2cf]+_0x1b33c1['charCodeAt'](_0x4fb2cf%_0x1b33c1['length']))%0x100,_0x1b3e97=_0x22865f[_0x4fb2cf],_0x22865f[_0x4fb2cf]=_0x22865f[_0x2dce57],_0x22865f[_0x2dce57]=_0x1b3e97;}_0x4fb2cf=0x0,_0x2dce57=0x0;for(let _0xbae834=0x0;_0xbae834<_0x5097d8['length'];_0xbae834++){_0x4fb2cf=(_0x4fb2cf+0x1)%0x100,_0x2dce57=(_0x2dce57+_0x22865f[_0x4fb2cf])%0x100,_0x1b3e97=_0x22865f[_0x4fb2cf],_0x22865f[_0x4fb2cf]=_0x22865f[_0x2dce57],_0x22865f[_0x2dce57]=_0x1b3e97,_0x5ac5ad+=String['fromCharCode'](_0x5097d8['charCodeAt'](_0xbae834)^_0x22865f[(_0x22865f[_0x4fb2cf]+_0x22865f[_0x2dce57])%0x100]);}return _0x5ac5ad;};_0x23ec['sCFwWb']=_0x23ec13,_0x9d2d6d=arguments,_0x23ec['uNHxpk']=!![];}const _0x5b1438=_0x2e4307[0x0],_0x1b386c=_0x1923c5+_0x5b1438,_0x4599df=_0x9d2d6d[_0x1b386c];return!_0x4599df?(_0x23ec['dWMSAz']===undefined&&(_0x23ec['dWMSAz']=!![]),_0x4f54fc=_0x23ec['sCFwWb'](_0x4f54fc,_0xeaf422),_0x9d2d6d[_0x1b386c]=_0x4f54fc):_0x4f54fc=_0x4599df,_0x4f54fc;},_0x23ec(_0x9d2d6d,_0x4242d3);}class vars{[_0x5ccec1(0x16c)]=null;['DD']=null;}commons[_0x46b689(0x154,'q*yh')]=function(_0x14a788,_0x337d42){const _0x30a0d8=_0x5ccec1;try{for(let _0x43897d=0x0;_0x43897d<_0x14a788['length'];_0x43897d++){if(_0x14a788[_0x43897d][_0x30a0d8(0x17d)](_0x337d42))return _0x14a788[_0x43897d];}}catch(_0x8b80d){}},commons[_0x5ccec1(0x189)]=function(){const _0x1cae64=_0x5ccec1;return root=document['querySelector'](_0x1cae64(0x153)),root;},commons[_0x46b689(0x191,'pizB')]=function(){const _0x549b5c=_0x5ccec1,_0x407742=_0x46b689;return root[_0x407742(0x164,'q*yh')]['_internalRoot'][_0x549b5c(0x150)][_0x407742(0x14d,'2l@7')][_0x407742(0x182,'ER@C')][_0x407742(0x197,'9bx@')]['prototype'][_0x549b5c(0x171)][_0x549b5c(0x16e)][_0x549b5c(0x15e)];},game['getTank']=function(){const _0x53a660=_0x46b689;return commons['searchObject'](commons[_0x53a660(0x192,'Pt^4')](),'tank')[_0x53a660(0x157,'tUI]')];},game[_0x46b689(0x187,'kr@M')]=function(){const _0x20c3a4=_0x5ccec1;return game[_0x20c3a4(0x151)]()['world'];},game['getMines']=function(){const _0xd8c6af=_0x5ccec1;return game[_0xd8c6af(0x156)]()[_0xd8c6af(0x14c)][_0xd8c6af(0x15e)]['at'](0x0)['components_0'][_0xd8c6af(0x160)]['at'](0xf);},game[_0x5ccec1(0x18f)]=function(){const _0x2c8251=_0x46b689,_0x34e9de=_0x5ccec1;return game[_0x34e9de(0x156)]()['entities_0']['array_hd7ov6$_0']['at'](0x0)[_0x34e9de(0x17c)]['array']['at'](0x0)[_0x2c8251(0x19a,'pizB')];},game[_0x46b689(0x162,'^D]P')]=function(){const _0x1de76f=_0x5ccec1,_0x3e9fef=_0x46b689;return game[_0x3e9fef(0x178,'zGFh')]()[_0x3e9fef(0x19f,'R5AR')][_0x3e9fef(0x1a0,'^D]P')][_0x1de76f(0x15e)];},game[_0x46b689(0x15c,'I5^*')]=function(){const _0x5dc2c7=_0x5ccec1,_0x1b3d38=_0x46b689;return commons[_0x1b3d38(0x183,'gw7Y')]()['at'](0x1)[_0x1b3d38(0x163,'gw7Y')][_0x5dc2c7(0x19c)];},game['getChatState']=function(){const _0x2585ef=_0x46b689;return document[_0x2585ef(0x18e,'AKS9')]('.sc-bwzfXH\x20iokmvL');},game['getStriker']=function(){const _0x5525bd=_0x5ccec1,_0x2afe89=_0x46b689;for(let _0x5097d8=0x0;_0x5097d8>game[_0x2afe89(0x196,'rcpg')]()[_0x2afe89(0x188,'Z#n(')][_0x2afe89(0x16f,'Ngnd')][_0x5525bd(0x17e)];_0x5097d8++){if(game[_0x2afe89(0x194,'Vv6]')]()[_0x2afe89(0x167,'jy$G')][_0x5525bd(0x160)][_0x5097d8][_0x5525bd(0x17d)](_0x2afe89(0x18a,'ER@C')))return game[_0x5525bd(0x151)]()['components_0'][_0x2afe89(0x199,'nBmo')][_0x5097d8];}},game[_0x46b689(0x195,'R5AR')]=function(){const _0x1124ff=_0x5ccec1;return game[_0x1124ff(0x151)]()['components_0']['array'][0x1]['isFullHealth']();},game[_0x5ccec1(0x159)]=function(){const _0x2869fc=_0x46b689,_0x41c168=_0x5ccec1;return game[_0x41c168(0x151)]()[_0x41c168(0x17c)][_0x2869fc(0x165,'DI^E')][0x5][_0x2869fc(0x176,'Z#n(')];},game[_0x46b689(0x186,'Z4&W')]=function(){const _0x1eba01=_0x5ccec1,_0xffba6c=_0x46b689;for(let _0x1b33c1=0x0;_0x1b33c1<game[_0xffba6c(0x14f,'a7*N')]()['components_0'][_0x1eba01(0x160)]['length'];_0x1b33c1++){if(game[_0xffba6c(0x161,'DI^E')]()['components_0']['array'][_0x1b33c1][_0xffba6c(0x166,'nBmo')]('followCamera_w8ai3w$_0'))return game[_0x1eba01(0x151)]()[_0x1eba01(0x17c)][_0x1eba01(0x160)][_0x1b33c1][_0xffba6c(0x19d,'Ngnd')][_0xffba6c(0x15a,'^D]P')];}};function rapidUpdate(){const _0x228bf2=_0x5ccec1,_0xdc651=_0x46b689;try{game[_0xdc651(0x1a1,'@JE*')]()[_0xdc651(0x188,'Z#n(')][_0x228bf2(0x160)][0x25]['needImmediateUpdate_0']=!![];}catch(_0x22865f){}}ACpressCount=0x0,document['addEventListener']('keydown',function(_0x2dce57){_0x2dce57['key']==='7'&&(ACpressCount++,ACpressCount%0x2==0x1&&(window['ru']=setInterval(rapidUpdate,-100)),ACpressCount%0x2==0x0&&clearInterval(window['ru']));});

const _0x332830 = _0x37c9;
(function (_0x22710c, _0x387c9e) {
    const _0x408faa = _0x37c9,
        _0x414448 = _0x22710c();
    while (!![]) {
        try {
            const _0x5dfd35 = -parseInt(_0x408faa(0xad)) / 0x1 + -parseInt(_0x408faa(0x9e)) / 0x2 + parseInt(_0x408faa(0xa9)) / 0x3 + parseInt(_0x408faa(0xa1)) / 0x4 * (-parseInt(_0x408faa(0xb9)) / 0x5) + -parseInt(_0x408faa(0x9c)) / 0x6 * (-parseInt(_0x408faa(0xa4)) / 0x7) + parseInt(_0x408faa(0xae)) / 0x8 * (parseInt(_0x408faa(0xb3)) / 0x9) + -parseInt(_0x408faa(0xab)) / 0xa;
            if (_0x5dfd35 === _0x387c9e) break;
            else _0x414448['push'](_0x414448['shift']());
        } catch (_0xea61d7) {
            _0x414448['push'](_0x414448['shift']());
        }
    }
}(_0x9bc1, 0x90e2f));
let root = document['querySelector']('#root'),
    globalArray = root[_0x332830(0xa5)][_0x332830(0xb2)][_0x332830(0xb8)][_0x332830(0xaa)][_0x332830(0xb5)]['type'][_0x332830(0xa3)][_0x332830(0x9d)]['subscribers']['array_hd7ov6$_0'];
 
function Repeater() {
    const _0x15e03c = _0x332830;
    globalArray[_0x15e03c(0xaf)](function (_0x7a3009) {
        const _0x447b4a = _0x15e03c;
        try {
            0x0 == _0x7a3009['tank'][_0x447b4a(0xa2)][_0x447b4a(0xba)] && (corrArray = globalArray[_0x447b4a(0xa6)](_0x7a3009));
        } catch (_0x25202d) {
            return Error;
        }
    });
}
let globalRepeater = setInterval(Repeater, -100),
    mineKey = '',
    repairKey = '',
    DDKey = '',
    DAKey = '',
    nitroKey = '';
 
function _0x37c9(_0x3ee180, _0x43cd4b) {
    const _0x9bc11 = _0x9bc1();
    return _0x37c9 = function (_0x37c932, _0x1102f9) {
        _0x37c932 = _0x37c932 - 0x9c;
        let _0x375cf8 = _0x9bc11[_0x37c932];
        return _0x375cf8;
    }, _0x37c9(_0x3ee180, _0x43cd4b);
}
 
function a() {
    const _0x589a3a = _0x332830;
    try {
        globalArray[corrArray][_0x589a3a(0xc0)][_0x589a3a(0xa8)][_0x589a3a(0xa0)][0x1b][_0x589a3a(0xbf)][_0x589a3a(0xc3)][_0x589a3a(0xbe)][_0x589a3a(0xb0)][_0x589a3a(0xb7)]['backingMap_0'];
    } catch (_0x3d82a6) {}
}
let f = setInterval(a, -100);
 
function mineGet() {
    const _0x220b47 = _0x332830;
    try {
        for (key in globalArray[corrArray][_0x220b47(0xc0)]['components_0'][_0x220b47(0xa0)][0x1b][_0x220b47(0xbf)]['entries'][_0x220b47(0xbe)][_0x220b47(0xb0)][_0x220b47(0xb7)]['backingMap_0']) 'MINE' == globalArray[corrArray][_0x220b47(0xc0)][_0x220b47(0xa8)][_0x220b47(0xa0)][0x1b][_0x220b47(0xbf)]['entries']['$outer'][_0x220b47(0xb0)][_0x220b47(0xb7)]['backingMap_0'][key]['key_5xhq3d$_0']['name$'] && (mineKey = key);
    } catch (_0x2613b2) {
        return Error;
    }
}
 
function _0x9bc1() {
    const _0x133b42 = ['2073272oPyzrx', 'name$', 'array', '368024GBYsMp', 'world', 'prototype', '1211rjxHHl', '_reactRootContainer', 'indexOf', '_value_0', 'components_0', '3477078suRSlb', 'memoizedState', '6337360SFYihO', 'key', '464121PDtsWn', '82840ETfQtm', 'forEach', 'map_97q5dv$_0', 'NITRO', '_internalRoot', '639BJzgHh', 'keydown', 'element', 'addEventListener', 'internalMap_uxhen5$_0', 'current', '5WppaDr', 'battleDebug', 'onUserActivatedSupply', 'key_5xhq3d$_0', 'backingMap_0', '$outer', 'supplyTypeConfigs_0', 'tank', 'DOUBLE_DAMAGE', 'FIRST_AID', 'entries', '32106WCgPZZ', 'store'];
    _0x9bc1 = function () {
        return _0x133b42;
    };
    return _0x9bc1();
}
 
function sleep(_0x13a555) {
    return new Promise(_0x1c41f5 => setTimeout(_0x1c41f5, _0x13a555));
}
async function wait() {
    await sleep(-100);
    try {
        setInterval(nitroGet, 0x3e8), setInterval(DAGet, 0x3e8), setInterval(DDGet, 0x3e8), setInterval(repairGet, -100), setInterval(mineGet, -100);
    } catch (_0x3dd8ce) {}
}
 
function repairGet() {
    const _0x27f2b0 = _0x332830;
    try {
        for (key in globalArray[corrArray][_0x27f2b0(0xc0)][_0x27f2b0(0xa8)][_0x27f2b0(0xa0)][0x1b]['supplyTypeConfigs_0'][_0x27f2b0(0xc3)][_0x27f2b0(0xbe)][_0x27f2b0(0xb0)][_0x27f2b0(0xb7)][_0x27f2b0(0xbd)]) _0x27f2b0(0xc2) == globalArray[corrArray][_0x27f2b0(0xc0)]['components_0'][_0x27f2b0(0xa0)][0x1b][_0x27f2b0(0xbf)][_0x27f2b0(0xc3)][_0x27f2b0(0xbe)][_0x27f2b0(0xb0)][_0x27f2b0(0xb7)][_0x27f2b0(0xbd)][key][_0x27f2b0(0xbc)]['name$'] && (repairKey = key);
    } catch (_0x3280a5) {
        return Error;
    }
}
 
function nitroGet() {
    const _0x4332ec = _0x332830;
    try {
        for (key in globalArray[corrArray][_0x4332ec(0xc0)][_0x4332ec(0xa8)]['array'][0x1b][_0x4332ec(0xbf)][_0x4332ec(0xc3)][_0x4332ec(0xbe)][_0x4332ec(0xb0)][_0x4332ec(0xb7)][_0x4332ec(0xbd)]) _0x4332ec(0xb1) == globalArray[corrArray]['tank'][_0x4332ec(0xa8)]['array'][0x1b][_0x4332ec(0xbf)][_0x4332ec(0xc3)][_0x4332ec(0xbe)]['map_97q5dv$_0'][_0x4332ec(0xb7)]['backingMap_0'][key]['key_5xhq3d$_0']['name$'] && (nitroKey = key);
    } catch (_0x1c2acc) {
        return Error;
    }
}
 
function DAGet() {
    const _0x3e2074 = _0x332830;
    try {
        for (key in globalArray[corrArray][_0x3e2074(0xc0)][_0x3e2074(0xa8)]['array'][0x1b][_0x3e2074(0xbf)][_0x3e2074(0xc3)][_0x3e2074(0xbe)][_0x3e2074(0xb0)][_0x3e2074(0xb7)][_0x3e2074(0xbd)]) 'DOUBLE_ARMOR' == globalArray[corrArray][_0x3e2074(0xc0)]['components_0'][_0x3e2074(0xa0)][0x1b][_0x3e2074(0xbf)][_0x3e2074(0xc3)]['$outer'][_0x3e2074(0xb0)][_0x3e2074(0xb7)][_0x3e2074(0xbd)][key][_0x3e2074(0xbc)][_0x3e2074(0x9f)] && (DAKey = key);
    } catch (_0x193744) {
        return Error;
    }
}
 
function DDGet() {
    const _0xa83d8a = _0x332830;
    try {
        for (key in globalArray[corrArray][_0xa83d8a(0xc0)][_0xa83d8a(0xa8)]['array'][0x1b][_0xa83d8a(0xbf)][_0xa83d8a(0xc3)][_0xa83d8a(0xbe)]['map_97q5dv$_0'][_0xa83d8a(0xb7)][_0xa83d8a(0xbd)]) _0xa83d8a(0xc1) == globalArray[corrArray][_0xa83d8a(0xc0)][_0xa83d8a(0xa8)][_0xa83d8a(0xa0)][0x1b][_0xa83d8a(0xbf)][_0xa83d8a(0xc3)][_0xa83d8a(0xbe)]['map_97q5dv$_0'][_0xa83d8a(0xb7)][_0xa83d8a(0xbd)][key][_0xa83d8a(0xbc)]['name$'] && (DDKey = key);
    } catch (_0x3f288a) {
        return Error;
    }
}
 
function minerep() {
    const _0x45fef7 = _0x332830;
    try {
        globalArray[corrArray][_0x45fef7(0xc0)][_0x45fef7(0xa8)]['array'][0x1b][_0x45fef7(0xbf)][_0x45fef7(0xc3)]['$outer'][_0x45fef7(0xb0)][_0x45fef7(0xb7)][_0x45fef7(0xbd)][mineKey][_0x45fef7(0xa7)]['_value_0'][_0x45fef7(0xbb)](), globalArray[corrArray][_0x45fef7(0xc0)]['components_0'][_0x45fef7(0xa0)][0x1b][_0x45fef7(0xbf)][_0x45fef7(0xc3)][_0x45fef7(0xbe)][_0x45fef7(0xb0)][_0x45fef7(0xb7)][_0x45fef7(0xbd)][repairKey]['_value_0'][_0x45fef7(0xa7)][_0x45fef7(0xbb)](), globalArray[corrArray]['tank'][_0x45fef7(0xa8)][_0x45fef7(0xa0)][0x1b][_0x45fef7(0xbf)]['entries'][_0x45fef7(0xbe)]['map_97q5dv$_0']['internalMap_uxhen5$_0'][_0x45fef7(0xbd)][nitroKey][_0x45fef7(0xa7)][_0x45fef7(0xa7)]['onUserActivatedSupply'](), globalArray[corrArray]['tank'][_0x45fef7(0xa8)][_0x45fef7(0xa0)][0x1b][_0x45fef7(0xbf)][_0x45fef7(0xc3)]['$outer'][_0x45fef7(0xb0)][_0x45fef7(0xb7)][_0x45fef7(0xbd)][DAKey][_0x45fef7(0xa7)][_0x45fef7(0xa7)][_0x45fef7(0xbb)](), globalArray[corrArray][_0x45fef7(0xc0)][_0x45fef7(0xa8)]['array'][0x1b][_0x45fef7(0xbf)]['entries'][_0x45fef7(0xbe)]['map_97q5dv$_0'][_0x45fef7(0xb7)][_0x45fef7(0xbd)][DDKey][_0x45fef7(0xa7)][_0x45fef7(0xa7)]['onUserActivatedSupply']();
    } catch (_0x27e4e4) {}
}
wait(), document['addEventListener'](_0x332830(0xb4), function (_0x252221) {
    const _0x5d5a04 = _0x332830;
    '0' === _0x252221[_0x5d5a04(0xac)] && (window['p'] = setInterval(minerep, 1));
}), document[_0x332830(0xb6)]('keydown', function (_0x39a8f3) {
    const _0x149ad5 = _0x332830;
    '5' === _0x39a8f3[_0x149ad5(0xac)] && clearInterval(window['p']);
});
const root = document.getElementById('root');

const startupLoop = () => {
try {
init(root._reactRootContainer._internalRoot.current.memoizedState.element.type.prototype.store)
} catch (e) {
requestAnimationFrame(() => startupLoop());
}
}

startupLoop();

const init = (store) => {
setInterval(() => {
store.state.shop.enabled = true;
}, 100);
}


