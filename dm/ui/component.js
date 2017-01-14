/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/machine/driver-fotexnet/component', ['exports', 'ember', 'ui/mixins/driver'], function (exports, _ember, _uiMixinsDriver) {

  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    driverName: 'fotexnet',
    locations: [
      { name: 'console', slug: 'console' }
    ],
    networks: [
      { name: 'Console', value: 'Console' }
    ],
    disk_sizes: [
      { name: '4 GB', value: 4096 },
      { name: '10 GB', value: 10240 },
      { name: '15 GB', value: 15360 },
      { name: '20 GB', value: 20480 },
      { name: '50 GB', value: 51200 }
    ],
    memory_sizes: [
      { name: '1 GB', value: 1024 },
      { name: '2 GB', value: 2048 },
      { name: '4 GB', value: 4096 },
      { name: '8 GB', value: 8192 }
    ],
    envs: [
      { name: "default", value: "coreos-config-default" }
    ],
/* ^--- And here */

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = this.get('store').createRecord({
        type        : 'fotexnetConfig',
        location    : 'console',
        diskSize    : 4096,
        memorySize  : 1024,
        network     : 'Console',
        vcpuCount   : 1,
        dhcpOption  : 'coreos-config-default',
      });

      let type = 'host';

      if (!this.get('useHost')) {
        type = 'machine';
      }

      this.set('model', this.get('store').createRecord({
        type: type,
        'fotexnetConfig': config,
      }));
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = this.get('errors')||[];

      // Add more specific errors

      // Check something and add an error entry if it fails:
      if ( parseInt(this.get('model.fotexnetConfig.diskSize'),10) < 4096 )
      {
        errors.push('Size must be at least 4096 MB');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( errors.get('length') )
      {
        this.set('errors', errors);
        return false;
      }
      else
      {
        this.set('errors', null);
        return true;
      }
    },

    // Any computed properties or custom logic can go here
  });
});
;
define("ui/components/machine/driver-fotexnet/template",["exports","ember","ui/mixins/driver"],function(exports,_ember,_uiMixinsDriver){

exports["default"] = Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 16,
            "column": 12
          },
          "end": {
            "line": 18,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element4 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element4, 'value');
        morphs[1] = dom.createAttrMorph(element4, 'selected');
        morphs[2] = dom.createMorphAt(element4,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice.slug",["loc",[null,[17,30],[17,41]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.fotexnetConfig.location",["loc",[null,[17,58],[17,87]]],0,0,0,0],["get","choice.slug",["loc",[null,[17,88],[17,99]]],0,0,0,0]],[],["loc",[null,[null,null],[17,101]]],0,0],0,0,0,0],
        ["content","choice.name",["loc",[null,[17,102],[17,117]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 29,
            "column": 12
          },
          "end": {
            "line": 31,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element3 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element3, 'value');
        morphs[1] = dom.createAttrMorph(element3, 'selected');
        morphs[2] = dom.createMorphAt(element3,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice.value",["loc",[null,[30,30],[30,42]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.fotexnetConfig.network",["loc",[null,[30,59],[30,87]]],0,0,0,0],["get","choice.value",["loc",[null,[30,88],[30,100]]],0,0,0,0]],[],["loc",[null,[null,null],[30,102]]],0,0],0,0,0,0],
        ["content","choice.name",["loc",[null,[30,103],[30,118]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  var child2 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 42,
            "column": 12
          },
          "end": {
            "line": 44,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("              ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element2, 'value');
        morphs[1] = dom.createAttrMorph(element2, 'selected');
        morphs[2] = dom.createMorphAt(element2,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice.value",["loc",[null,[43,30],[43,42]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.fotexnetConfig.dhcpOption",["loc",[null,[43,59],[43,90]]],0,0,0,0],["get","choice.value",["loc",[null,[43,91],[43,103]]],0,0,0,0]],[],["loc",[null,[null,null],[43,105]]],0,0],0,0,0,0],
        ["content","choice.name",["loc",[null,[43,106],[43,121]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  var child3 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 55,
            "column": 12
          },
          "end": {
            "line": 57,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element1, 'value');
        morphs[1] = dom.createAttrMorph(element1, 'selected');
        morphs[2] = dom.createMorphAt(element1,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice.value",["loc",[null,[56,28],[56,40]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.fotexnetConfig.diskSize",["loc",[null,[56,57],[56,86]]],0,0,0,0],["get","choice.value",["loc",[null,[56,87],[56,99]]],0,0,0,0]],[],["loc",[null,[null,null],[56,101]]],0,0],0,0,0,0],
        ["content","choice.name",["loc",[null,[56,102],[56,117]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  var child4 = (function() {
    return {
      meta: {
        "revision": "Ember@2.9.0",
        "loc": {
          "source": null,
          "start": {
            "line": 68,
            "column": 12
          },
          "end": {
            "line": 70,
            "column": 12
          }
        }
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("            ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("option");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createAttrMorph(element0, 'value');
        morphs[1] = dom.createAttrMorph(element0, 'selected');
        morphs[2] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","value",["get","choice.value",["loc",[null,[69,28],[69,40]]],0,0,0,0],0,0,0,0],
        ["attribute","selected",["subexpr","eq",[["get","model.fotexnetConfig.memorySize",["loc",[null,[69,57],[69,88]]],0,0,0,0],["get","choice.value",["loc",[null,[69,89],[69,101]]],0,0,0,0]],[],["loc",[null,[null,null],[69,103]]],0,0],0,0,0,0],
        ["content","choice.name",["loc",[null,[69,104],[69,119]]],0,0,0,0]
      ],
      locals: ["choice"],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.9.0",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 99,
          "column": 0
        }
      }
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("section");
      dom.setAttribute(el1,"class","horizontal-form");
      var el2 = dom.createTextNode("\n  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("div");
      dom.setAttribute(el2,"class","container-fluid");
      var el3 = dom.createTextNode("\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","over-hr r-mt20 r-mb20");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("span");
      var el5 = dom.createTextNode("Instance");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Location");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Network");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Type");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Disk size");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("Memory size");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("select");
      dom.setAttribute(el5,"class","form-control");
      var el6 = dom.createTextNode("\n");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n      ");
      dom.appendChild(el2, el3);
      var el3 = dom.createElement("div");
      dom.setAttribute(el3,"class","row form-group");
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-2 form-label");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("label");
      dom.setAttribute(el5,"class","form-control-static");
      var el6 = dom.createTextNode("vCPU");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n        ");
      dom.appendChild(el3, el4);
      var el4 = dom.createElement("div");
      dom.setAttribute(el4,"class","col-md-4");
      var el5 = dom.createTextNode("\n          ");
      dom.appendChild(el4, el5);
      var el5 = dom.createElement("div");
      dom.setAttribute(el5,"class","input-group");
      var el6 = dom.createTextNode("\n            ");
      dom.appendChild(el5, el6);
      var el6 = dom.createComment("");
      dom.appendChild(el5, el6);
      var el6 = dom.createTextNode("\n          ");
      dom.appendChild(el5, el6);
      dom.appendChild(el4, el5);
      var el5 = dom.createTextNode("\n        ");
      dom.appendChild(el4, el5);
      dom.appendChild(el3, el4);
      var el4 = dom.createTextNode("\n      ");
      dom.appendChild(el3, el4);
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n\n");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("    ");
      dom.appendChild(el2, el3);
      var el3 = dom.createComment("");
      dom.appendChild(el2, el3);
      var el3 = dom.createTextNode("\n  ");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n\n");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("  ");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element5 = dom.childAt(fragment, [0]);
      var element6 = dom.childAt(element5, [1]);
      var element7 = dom.childAt(element6, [6, 3, 1]);
      var element8 = dom.childAt(element6, [8, 3, 1]);
      var element9 = dom.childAt(element6, [10, 3, 1]);
      var element10 = dom.childAt(element6, [12, 3, 1]);
      var element11 = dom.childAt(element6, [14, 3, 1]);
      var morphs = new Array(15);
      morphs[0] = dom.createMorphAt(element6,2,2);
      morphs[1] = dom.createAttrMorph(element7, 'onchange');
      morphs[2] = dom.createMorphAt(element7,1,1);
      morphs[3] = dom.createAttrMorph(element8, 'onchange');
      morphs[4] = dom.createMorphAt(element8,1,1);
      morphs[5] = dom.createAttrMorph(element9, 'onchange');
      morphs[6] = dom.createMorphAt(element9,1,1);
      morphs[7] = dom.createAttrMorph(element10, 'onchange');
      morphs[8] = dom.createMorphAt(element10,1,1);
      morphs[9] = dom.createAttrMorph(element11, 'onchange');
      morphs[10] = dom.createMorphAt(element11,1,1);
      morphs[11] = dom.createMorphAt(dom.childAt(element6, [16, 3, 1]),1,1);
      morphs[12] = dom.createMorphAt(element6,19,19);
      morphs[13] = dom.createMorphAt(element5,4,4);
      morphs[14] = dom.createMorphAt(element5,7,7);
      return morphs;
    },
    statements: [
      ["inline","partial",["host/add-common"],[],["loc",[null,[4,4],[4,33]]],0,0],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.fotexnetConfig.location",["loc",[null,[15,62],[15,91]]],0,0,0,0]],[],["loc",[null,[15,57],[15,92]]],0,0]],["value","target.value"],["loc",[null,[null,null],[15,115]]],0,0],0,0,0,0],
      ["block","each",[["get","locations",["loc",[null,[16,20],[16,29]]],0,0,0,0]],[],0,null,["loc",[null,[16,12],[18,21]]]],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.fotexnetConfig.network",["loc",[null,[28,62],[28,90]]],0,0,0,0]],[],["loc",[null,[28,57],[28,91]]],0,0]],["value","target.value"],["loc",[null,[null,null],[28,114]]],0,0],0,0,0,0],
      ["block","each",[["get","networks",["loc",[null,[29,20],[29,28]]],0,0,0,0]],[],1,null,["loc",[null,[29,12],[31,21]]]],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.fotexnetConfig.dhcpOption",["loc",[null,[41,62],[41,93]]],0,0,0,0]],[],["loc",[null,[41,57],[41,94]]],0,0]],["value","target.value"],["loc",[null,[null,null],[41,117]]],0,0],0,0,0,0],
      ["block","each",[["get","envs",["loc",[null,[42,20],[42,24]]],0,0,0,0]],[],2,null,["loc",[null,[42,12],[44,21]]]],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.fotexnetConfig.diskSize",["loc",[null,[54,62],[54,91]]],0,0,0,0]],[],["loc",[null,[54,57],[54,92]]],0,0]],["value","target.value"],["loc",[null,[null,null],[54,115]]],0,0],0,0,0,0],
      ["block","each",[["get","disk_sizes",["loc",[null,[55,20],[55,30]]],0,0,0,0]],[],3,null,["loc",[null,[55,12],[57,21]]]],
      ["attribute","onchange",["subexpr","action",[["subexpr","mut",[["get","model.fotexnetConfig.memorySize",["loc",[null,[67,62],[67,93]]],0,0,0,0]],[],["loc",[null,[67,57],[67,94]]],0,0]],["value","target.value"],["loc",[null,[null,null],[67,117]]],0,0],0,0,0,0],
      ["block","each",[["get","memory_sizes",["loc",[null,[68,20],[68,32]]],0,0,0,0]],[],4,null,["loc",[null,[68,12],[70,21]]]],
      ["inline","input",[],["type","text","class","form-control","value",["subexpr","@mut",[["get","model.fotexnetConfig.vcpuCount",["loc",[null,[83,20],[83,50]]],0,0,0,0]],[],[],0,0]],["loc",[null,[81,12],[84,14]]],0,0],
      ["inline","partial",["host/add-options"],[],["loc",[null,[90,4],[90,34]]],0,0],
      ["inline","top-errors",[],["errors",["subexpr","@mut",[["get","errors",["loc",[null,[94,22],[94,28]]],0,0,0,0]],[],[],0,0]],["loc",[null,[94,2],[94,30]]],0,0],
      ["inline","save-cancel",[],["save","save","cancel","cancel"],["loc",[null,[97,2],[97,45]]],0,0]
    ],
    locals: [],
    templates: [child0, child1, child2, child3, child4]
  };
}()));;

});
