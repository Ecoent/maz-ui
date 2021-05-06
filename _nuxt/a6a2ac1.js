(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{735:function(e,n,t){"use strict";t.r(n);var o={name:"MazCardDoc"},r=t(1),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"maz-card-doc"},[t("ComponentContainer",{staticClass:"maz-card-doc__demo",attrs:{code:'<template>\n  <MazCard\n    :images="[\n      \'https://www.stevensegallery.com/600/800\'\n    ]"\n  >\n    <template #title>\n      <h4>\n        Steven Seagal\n      </h4>\n    </template>\n    <template #subtitle>\n      <h5>\n        Actor\n      </h5>\n    </template>\n    <template #content>\n      <p class="maz-text-muted">\n        You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome!\n      </p>\n    </template>\n    <template #actions>\n      <MazBtn\n        size="sm"\n        icon-name="delete"\n        fab\n        color="danger"\n      />\n      <MazBtn\n        size="sm"\n        left-icon-name="star"\n        color="white"\n      >\n        <strong>5</strong>\n      </MazBtn>\n    </template>\n  </MazCard>\n<template>'}},[t("h3",{staticClass:"maz-mb-4"},[e._v("\n        Basic\n      ")]),e._v(" "),t("MazCard",{attrs:{images:["https://www.stevensegallery.com/600/800"]},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",[e._v("\n            Steven Seagal\n          ")])]},proxy:!0},{key:"subtitle",fn:function(){return[t("h5",[e._v("\n            Actor\n          ")])]},proxy:!0},{key:"content",fn:function(){return[t("p",{staticClass:"maz-text-muted"},[e._v("\n            You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!\n          ")])]},proxy:!0},{key:"actions",fn:function(){return[t("MazBtn",{attrs:{size:"sm","icon-name":"delete",fab:"",color:"danger"}}),e._v(" "),t("MazBtn",{attrs:{size:"sm","left-icon-name":"star",color:"white"}},[t("strong",[e._v("5")])])]},proxy:!0}])})],1),e._v(" "),t("ComponentContainer",{attrs:{code:'<template>\n  <MazCard\n    href="https://www.stevensegallery.com/640/500"\n    href-target="_blank"\n    :max-width="500"\n    variant="row"\n    :images="[\n      \'https://www.stevensegallery.com/640/500\',\n      \'https://www.stevensegallery.com/740/600\'\n    ]"\n  >\n    <template #title>\n      <h4>\n        Steven Seagal\n      </h4>\n    </template>\n    <template #content>\n      <p class="maz-text-muted">\n        You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome!\n      </p>\n    </template>\n    <template #footer>\n      <MazBtn\n        size="sm"\n      >\n        Action 1\n      </MazBtn>\n      <MazBtn\n        color="secondary"\n        size="sm"\n      >\n        Action 2\n      </MazBtn>\n    </template>\n  </MazCard>\n</template>'}},[t("h3",{staticClass:"maz-mb-4"},[e._v("\n        Linked - row variant - footer\n      ")]),e._v(" "),t("MazCard",{attrs:{href:"https://www.stevensegallery.com/640/500","href-target":"_blank","max-width":500,variant:"row",images:["https://www.stevensegallery.com/640/500","https://www.stevensegallery.com/740/600"]},scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",[e._v("\n            Steven Seagal\n          ")])]},proxy:!0},{key:"content",fn:function(){return[t("p",{staticClass:"maz-text-muted"},[e._v("\n            You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!\n          ")])]},proxy:!0},{key:"footer",fn:function(){return[t("MazBtn",{attrs:{size:"sm"}},[e._v("\n            Action 1\n          ")]),e._v(" "),t("MazBtn",{attrs:{color:"secondary",size:"sm"}},[e._v("\n            Action 2\n          ")])]},proxy:!0}])})],1),e._v(" "),t("ComponentContainer",{attrs:{code:'<template>\n  <MazCard\n    :images="[\n      \'https://www.stevensegallery.com/640/500\',\n      \'https://www.stevensegallery.com/740/600\'\n    ]"\n    zoom\n  >\n    <template #actions>\n      <MazBtn\n        size="sm"\n        icon-name="delete"\n        fab\n        color="danger"\n      />\n      <MazBtn\n        size="sm"\n        left-icon-name="star"\n        color="white"\n      >\n        <strong>5</strong>\n      </MazBtn>\n    </template>\n  </MazCard>\n</template>'}},[t("h3",{staticClass:"maz-mb-4"},[e._v("\n        Zoom - actions\n      ")]),e._v(" "),t("MazCard",{attrs:{images:["https://www.stevensegallery.com/640/500","https://www.stevensegallery.com/740/600"],zoom:""},scopedSlots:e._u([{key:"actions",fn:function(){return[t("MazBtn",{attrs:{size:"sm","icon-name":"delete",fab:"",color:"danger"}}),e._v(" "),t("MazBtn",{attrs:{size:"sm","left-icon-name":"star",color:"white"}},[t("strong",[e._v("5")])])]},proxy:!0}])})],1),e._v(" "),t("ComponentContainer",{attrs:{code:'<template>\n  <MazCarousel>\n    <MazCard\n      v-for="(item, i) in Array(8)"\n      :key="i"\n      variant="row"\n      :width="400"\n      :images="[\n        \'https://www.stevensegallery.com/800/800\'\n      ]"\n    >\n      <template #title>\n        <h4>\n          Steven Seagal\n        </h4>\n      </template>\n      <template #content>\n        <p class="maz-text-muted">\n          You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome! You\'re awesome!\n        </p>\n      </template>\n    </MazCard>\n  </MazCarousel>\n</template>'}},[t("h3",{staticClass:"maz-mb-4"},[e._v("\n        In a\n        "),t("NuxtLink",{attrs:{to:{name:"documentation-maz-carousel"}}},[e._v("\n          MazCarousel\n        ")]),e._v("\n        component\n      ")],1),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),e._v(" "),t("MazCarousel",{scopedSlots:e._u([{key:"title",fn:function(){return[t("h4",[e._v("\n            Steven Seagal Carousel\n          ")])]},proxy:!0}])},[e._v(" "),e._l(Array(8),(function(n,i){return t("MazCard",{key:i,attrs:{variant:"row",width:400,images:["https://www.stevensegallery.com/800/800"]},scopedSlots:e._u([{key:"title",fn:function(){return[t("h5",[e._v("\n              Steven Seagal\n            ")])]},proxy:!0},{key:"content",fn:function(){return[t("p",{staticClass:"maz-text-muted"},[e._v("\n              You're awesome! You're awesome! You're awesome! You're awesome! You're awesome!\n            ")])]},proxy:!0}],null,!0)})}))],2)],1),e._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),e._v(" "),t("h4",[e._v("\n      How to use it ?\n    ")]),e._v(" "),t("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazCard\n    :images=\"images\"\n  />\n</template>\n\n<script>\n  import { MazCard } from 'maz-ui'\n  export default {\n    components: { MazCard },\n    data () {\n      return {\n        images: [\n          'https://www.stevensegallery.com/640/500'\n        ]\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);