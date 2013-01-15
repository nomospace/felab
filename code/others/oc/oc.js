define(function(require, exports) {
  // IE下oc启动，并在非ie下显示在线;
  // @注意： 需要在ie下添加站点到可信任站点列表， 否则IMNControlObj.PresenceEnabled 为 0， 所以取不到用户的初始状态
  // @argument: container { element } : 需要初始化<img.icon-oc>节点上的oc功能的父容器元素
  // @注意：修改了源文件：
  // 1）　function IMNRC(name, elem)  //添加了elem 元素
  // 2) var obj=(elem) ? elem : window.event.srcElement;  // 添加了是否已有elem的判断
  // 3) 发现问题： oc元素在table中，定位会有问题。出现在非第一次页面刷新加载。
  // typeof console !== 'undefined' && console.log(oouiX + ','+ oouiY + ',typeof oouiX: '+ typeof oouiX);

  function _start(container, dataHostRoot) {
    var $ocImgs = $(container).find('img.icon-oc'),
      owsUrl = dataHostRoot ? (dataHostRoot + 'ows.js') : ( 'ows');
    require([owsUrl], function(ows) {
      $ocImgs.each(function() {
        var $this = $(this), user = $this.data('user');
        ows.IMNRC(user, this);
      });
    });
  }

  // 定义oc类函数
  var oc = function() {
    this.userId = userId;
  };
  oc.prototype = {
    init: function() {
      this.nameCtrl = new ActiveXObject('Name.NameCtrl.1');
      if (this.nameCtrl.PresenceEnabled) {
        this.nameCtrl.OnStatusChange = this.onStatusChange;
        this.nameCtrl.GetStatus(this.userId, "1");
      }
    },
    onStatusChange: function(name, status, id) {
      // This function is fired when the contacts presence status changes.
      // In a real world solution, you would want to update an image to reflect the users presence
//      var option = this.getStatusOption(status);
    },
    ShowOOUI: function() {
      this.nameCtrl.ShowOOUI(this.userId, 0, 15, 15);
    },
    HideOOUI: function() {
      this.nameCtrl.HideOOUI();
    },
    getStatusOption: function(status) {
      var curr = 'IMNOnline',
        TEXT_ENUM = {
          IMNOnline: "空闲",
          IMNOffline: "脱机",
          IMNAway: "离开",
          IMNBusy: "忙碌",
          IMNDoNotDisturb: "请勿打扰",
          IMNIdle: "可能已离开",
          IMNBlocked: "阻止",
          IMNOnline_OOF: "空闲(OOF)",
          IMNOffline_OOF: "脱机(OOF)",
          IMNAway_OOF: "离开(OOF)",
          IMNBusy_OOF: "忙碌(OOF)",
          IMNDoNotDisturb_OOF: "请勿打扰(OOF)",
          IMNIdle_OOF: "可能已离开(OOF)"
        },
        IMG_ENUM = {
          IMNOnline: "imnon.png",
          IMNOffline: "imnoff.png",
          IMNAway: "imnaway.png",
          IMNBusy: "imnbusy.png",
          IMNDoNotDisturb: "imndnd.png",
          IMNIdle: "imnidle.png",
          IMNBlocked: "imnblocked.png",
          IMNOnline_OOF: "imnonoof.png",
          IMNOffline_OOF: "imnoffoof.png",
          IMNAway_OOF: "imnawayoff.png",
          IMNBusy_OOF: "imnbusyoof.png",
          IMNDoNotDisturb_OOF: "imndndoof.png",
          IMNIdle_OOF: "imnidleoof.png"
        };

      switch (state) {
        case 0:
          curr = 'IMNOnline';
          break;
        case 11:
          curr = 'IMNOnline_OOF';
          break;
        case 1:
          curr = 'IMNOffline';
          break;
        case 12:
          curr = 'IMNOffline_OOF';
          break;
        case 2:
          curr = 'IMNAway';
          break;
        case 13:
          curr = 'IMNAway_OOF';
          break;
        case 3:
          curr = 'IMNBusy';
          break;
        case 14:
          curr = 'IMNBusy_OOF';
          break;
        case 4:
          curr = 'IMNAway';
          break;
        case 5:
          curr = 'IMNBusy';
          break;
        case 6:
          curr = 'IMNAway';
          break;
        case 7:
          curr = 'IMNBusy';
          break;
        case 8:
          curr = 'IMNAway';
          break;
        case 9:
          curr = 'IMNDoNotDisturb';
          break;
        case 15:
          curr = 'IMNDoNotDisturb_OOF';
          break;
        case 10:
          curr = 'IMNBusy';
          break;
        case 16:
          curr = 'IMNIdle';
          break;
        case 17:
          curr = 'IMNIdle_OOF';
          break;
        case 18:
          curr = 'IMNBlocked';
          break;
        case 19:
          curr = 'IMNBusy';
          break;
        case 20:
          curr = 'IMNBusy_OOF';
          break;
        default:
          curr = 'IMNOffline';
      }
      return {
        TEXT: TEXT_ENUM[curr],
        IMG: IMG_ENUM[curr]
      };
    }
  };

  /*var $node = $('<div >oc test</div>');
   $node.appendTo('body'); */
  exports.start = _start;
});

