(self.webpackChunkant_design_pro = self.webpackChunkant_design_pro || []).push([
  [893],
  {
    60615: function (Wt, ke, m) {
      'use strict';
      m.d(ke, {
        Z: function () {
          return M;
        },
      });
      var K = m(36531),
        I = m(59301),
        t = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
              {
                tag: 'path',
                attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' },
              },
              {
                tag: 'path',
                attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' },
              },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        b = t,
        N = m(23986),
        q = function (W, he) {
          return I.createElement(N.Z, (0, K.Z)((0, K.Z)({}, W), {}, { ref: he, icon: b }));
        };
      q.displayName = 'PlusOutlined';
      var M = I.forwardRef(q);
    },
    95443: function (Wt, ke, m) {
      'use strict';
      m.d(ke, {
        oK: function () {
          return $n;
        },
        ZP: function () {
          return En;
        },
        Go: function () {
          return Nt;
        },
        YB: function () {
          return Vn;
        },
      });
      var K = m(99793),
        I = m(20658),
        t = m(36531),
        b = m(96688),
        N = m(59301),
        q = m(38299),
        M = m(75722),
        Ee = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: '\u0627\u0644\u0645\u0632\u064A\u062F',
              clear: '\u0646\u0638\u0641',
              confirm: '\u062A\u0623\u0643\u064A\u062F',
              itemUnit: '\u0639\u0646\u0627\u0635\u0631',
            },
          },
          tableForm: {
            search: '\u0627\u0628\u062D\u062B',
            reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
            submit: '\u0627\u0631\u0633\u0627\u0644',
            collapsed: '\u0645\u064F\u0642\u0644\u0635',
            expand: '\u0645\u064F\u0648\u0633\u0639',
            inputPlaceholder:
              '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062F\u062E\u0627\u0644',
            selectPlaceholder:
              '\u0627\u0644\u0631\u062C\u0627\u0621 \u0627\u0644\u0625\u062E\u062A\u064A\u0627\u0631',
          },
          alert: {
            clear: '\u0646\u0638\u0641',
            selected: '\u0645\u062D\u062F\u062F',
            item: '\u0639\u0646\u0635\u0631',
          },
          pagination: {
            total: { range: ' ', total: '\u0645\u0646', item: '\u0639\u0646\u0627\u0635\u0631' },
          },
          tableToolBar: {
            leftPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
            rightPin: '\u062B\u0628\u062A \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
            noPin: '\u0627\u0644\u063A\u0627\u0621 \u0627\u0644\u062A\u062B\u0628\u064A\u062A',
            leftFixedTitle:
              '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631',
            rightFixedTitle:
              '\u0644\u0635\u0642 \u0639\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646',
            noFixedTitle:
              '\u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0625\u0644\u0635\u0627\u0642',
            reset: '\u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646',
            columnDisplay:
              '\u0627\u0644\u0623\u0639\u0645\u062F\u0629 \u0627\u0644\u0645\u0639\u0631\u0648\u0636\u0629',
            columnSetting: '\u0627\u0644\u0625\u0639\u062F\u0627\u062F\u0627\u062A',
            fullScreen:
              '\u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
            exitFullScreen:
              '\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0643\u0627\u0645\u0644 \u0627\u0644\u0634\u0627\u0634\u0629',
            reload: '\u062A\u062D\u062F\u064A\u062B',
            density: '\u0627\u0644\u0643\u062B\u0627\u0641\u0629',
            densityDefault: '\u0627\u0641\u062A\u0631\u0627\u0636\u064A',
            densityLarger: '\u0623\u0643\u0628\u0631',
            densityMiddle: '\u0648\u0633\u0637',
            densitySmall: '\u0645\u062F\u0645\u062C',
          },
          stepsForm: {
            next: '\u0627\u0644\u062A\u0627\u0644\u064A',
            prev: '\u0627\u0644\u0633\u0627\u0628\u0642',
          },
          loginForm: {
            submitText: '\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644',
          },
        },
        W = {
          moneySymbol: '\uFFE5',
          form: {
            lightFilter: {
              more: '\u66F4\u591A\u7B5B\u9009',
              clear: '\u6E05\u9664',
              confirm: '\u786E\u8BA4',
              itemUnit: '\u9879',
            },
          },
          tableForm: {
            search: '\u67E5\u8BE2',
            reset: '\u91CD\u7F6E',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u5F00',
            expand: '\u6536\u8D77',
            inputPlaceholder: '\u8BF7\u8F93\u5165',
            selectPlaceholder: '\u8BF7\u9009\u62E9',
          },
          alert: {
            clear: '\u53D6\u6D88\u9009\u62E9',
            selected: '\u5DF2\u9009\u62E9',
            item: '\u9879',
          },
          pagination: { total: { range: '\u7B2C', total: '\u6761/\u603B\u5171', item: '\u6761' } },
          tableToolBar: {
            leftPin: '\u56FA\u5B9A\u5728\u5217\u9996',
            rightPin: '\u56FA\u5B9A\u5728\u5217\u5C3E',
            noPin: '\u4E0D\u56FA\u5B9A',
            leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u4FA7',
            rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u4FA7',
            noFixedTitle: '\u4E0D\u56FA\u5B9A',
            reset: '\u91CD\u7F6E',
            columnDisplay: '\u5217\u5C55\u793A',
            columnSetting: '\u5217\u8BBE\u7F6E',
            fullScreen: '\u5168\u5C4F',
            exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
            reload: '\u5237\u65B0',
            density: '\u5BC6\u5EA6',
            densityDefault: '\u6B63\u5E38',
            densityLarger: '\u9ED8\u8BA4',
            densityMiddle: '\u4E2D\u7B49',
            densitySmall: '\u7D27\u51D1',
          },
          editableTable: {
            action: { save: '\u4FDD\u5B58', cancel: '\u53D6\u6D88', delete: '\u5220\u9664' },
          },
          switch: { open: '\u6253\u5F00', close: '\u5173\u95ED' },
          loginForm: { submitText: '\u767B\u5F55' },
        },
        he = {
          moneySymbol: '$',
          form: {
            lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' },
          },
          tableForm: {
            search: 'Query',
            reset: 'Reset',
            submit: 'Submit',
            collapsed: 'Expand',
            expand: 'Collapse',
            inputPlaceholder: 'Please enter',
            selectPlaceholder: 'Please select',
          },
          alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
          pagination: { total: { range: ' ', total: 'of', item: 'items' } },
          tableToolBar: {
            leftPin: 'Pin to left',
            rightPin: 'Pin to right',
            noPin: 'Unpinned',
            leftFixedTitle: 'Fixed the left',
            rightFixedTitle: 'Fixed the right',
            noFixedTitle: 'Not Fixed',
            reset: 'Reset',
            columnDisplay: 'Column Display',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Exit Full Screen',
            reload: 'Refresh',
            density: 'Density',
            densityDefault: 'Default',
            densityLarger: 'Larger',
            densityMiddle: 'Middle',
            densitySmall: 'Compact',
          },
          stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
          loginForm: { submitText: 'Login' },
          editableTable: { action: { save: 'Save', cancel: 'Cancel', delete: 'Delete' } },
          switch: { open: 'open', close: 'close' },
        },
        pe = {
          moneySymbol: '\xA3',
          form: {
            lightFilter: { more: 'More', clear: 'Clear', confirm: 'Confirm', itemUnit: 'Items' },
          },
          tableForm: {
            search: 'Query',
            reset: 'Reset',
            submit: 'Submit',
            collapsed: 'Expand',
            expand: 'Collapse',
            inputPlaceholder: 'Please enter',
            selectPlaceholder: 'Please select',
          },
          alert: { clear: 'Clear', selected: 'Selected', item: 'Item' },
          pagination: { total: { range: ' ', total: 'of', item: 'items' } },
          tableToolBar: {
            leftPin: 'Pin to left',
            rightPin: 'Pin to right',
            noPin: 'Unpinned',
            leftFixedTitle: 'Fixed the left',
            rightFixedTitle: 'Fixed the right',
            noFixedTitle: 'Not Fixed',
            reset: 'Reset',
            columnDisplay: 'Column Display',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Exit Full Screen',
            reload: 'Refresh',
            density: 'Density',
            densityDefault: 'Default',
            densityLarger: 'Larger',
            densityMiddle: 'Middle',
            densitySmall: 'Compact',
          },
          stepsForm: { next: 'Next', prev: 'Previous', submit: 'Finish' },
          loginForm: { submitText: 'Login' },
          editableTable: { action: { save: 'Save', cancel: 'Cancel', delete: 'Delete' } },
          switch: { open: 'open', close: 'close' },
        },
        Pe = {
          moneySymbol: '\u20AB',
          tableForm: {
            search: 'T\xECm ki\u1EBFm',
            reset: 'L\xE0m l\u1EA1i',
            submit: 'G\u1EEDi \u0111i',
            collapsed: 'M\u1EDF r\u1ED9ng',
            expand: 'Thu g\u1ECDn',
            inputPlaceholder: 'nh\u1EADp d\u1EEF li\u1EC7u',
            selectPlaceholder: 'Vui l\xF2ng ch\u1ECDn',
          },
          alert: { clear: 'X\xF3a', selected: '\u0111\xE3 ch\u1ECDn', item: 'm\u1EE5c' },
          pagination: { total: { range: ' ', total: 'tr\xEAn', item: 'm\u1EB7t h\xE0ng' } },
          tableToolBar: {
            leftPin: 'Ghim tr\xE1i',
            rightPin: 'Ghim ph\u1EA3i',
            noPin: 'B\u1ECF ghim',
            leftFixedTitle: 'C\u1ED1 \u0111\u1ECBnh tr\xE1i',
            rightFixedTitle: 'C\u1ED1 \u0111\u1ECBnh ph\u1EA3i',
            noFixedTitle: 'Ch\u01B0a c\u1ED1 \u0111\u1ECBnh',
            reset: 'L\xE0m l\u1EA1i',
            columnDisplay: 'C\u1ED9t hi\u1EC3n th\u1ECB',
            columnSetting: 'C\u1EA5u h\xECnh',
            fullScreen: 'Ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
            exitFullScreen: 'Tho\xE1t ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh',
            reload: 'L\xE0m m\u1EDBi',
            density: 'M\u1EADt \u0111\u1ED9 hi\u1EC3n th\u1ECB',
            densityDefault: 'M\u1EB7c \u0111\u1ECBnh',
            densityLarger: 'M\u1EB7c \u0111\u1ECBnh',
            densityMiddle: 'Trung b\xECnh',
            densitySmall: 'Ch\u1EADt',
          },
          loginForm: { submitText: '\u0110\u0103ng nh\u1EADp' },
        },
        Re = {
          moneySymbol: '\u20AC',
          tableForm: {
            search: 'Filtra',
            reset: 'Pulisci',
            submit: 'Invia',
            collapsed: 'Espandi',
            expand: 'Contrai',
            inputPlaceholder: 'Digita',
            selectPlaceholder: 'Seleziona',
          },
          alert: { clear: 'Rimuovi', selected: 'Selezionati', item: 'elementi' },
          pagination: { total: { range: ' ', total: 'di', item: 'elementi' } },
          tableToolBar: {
            leftPin: 'Fissa a sinistra',
            rightPin: 'Fissa a destra',
            noPin: 'Ripristina posizione',
            leftFixedTitle: 'Fissato a sinistra',
            rightFixedTitle: 'Fissato a destra',
            noFixedTitle: 'Non fissato',
            reset: 'Ripristina',
            columnDisplay: 'Disposizione colonne',
            columnSetting: 'Impostazioni',
            fullScreen: 'Modalit\xE0 schermo intero',
            exitFullScreen: 'Esci da modalit\xE0 schermo intero',
            reload: 'Ricarica',
            density: 'Grandezza tabella',
            densityLarger: 'Grande',
            densityMiddle: 'Media',
            densitySmall: 'Compatta',
          },
          loginForm: { submitText: 'Accedi' },
        },
        Ie = {
          moneySymbol: '\u20AC',
          tableForm: {
            search: 'Buscar',
            reset: 'Limpiar',
            submit: 'Submit',
            collapsed: 'Expandir',
            expand: 'Colapsar',
            inputPlaceholder: 'Ingrese valor',
            selectPlaceholder: 'Seleccione valor',
          },
          alert: { clear: 'Limpiar', selected: 'Seleccionado', item: 'Articulo' },
          pagination: { total: { range: ' ', total: 'de', item: 'art\xEDculos' } },
          tableToolBar: {
            leftPin: 'Pin a la izquierda',
            rightPin: 'Pin a la derecha',
            noPin: 'Sin Pin',
            leftFixedTitle: 'Fijado a la izquierda',
            rightFixedTitle: 'Fijado a la derecha',
            noFixedTitle: 'Sin Fijar',
            reset: 'Reiniciar',
            columnDisplay: 'Mostrar Columna',
            columnSetting: 'Configuraci\xF3n',
            fullScreen: 'Pantalla Completa',
            exitFullScreen: 'Salir Pantalla Completa',
            reload: 'Refrescar',
            density: 'Densidad',
            densityDefault: 'Por Defecto',
            densityLarger: 'Largo',
            densityMiddle: 'Medio',
            densitySmall: 'Compacto',
          },
          stepsForm: { next: 'Siguiente', prev: 'Anterior', submit: 'Finalizar' },
          loginForm: { submitText: 'Entrar' },
        },
        De = {
          moneySymbol: '\u20AC',
          tableForm: {
            search: 'Cercar',
            reset: 'Netejar',
            submit: 'Enviar',
            collapsed: 'Expandir',
            expand: 'Col\xB7lapsar',
            inputPlaceholder: 'Introdu\xEFu valor',
            selectPlaceholder: 'Seleccioneu valor',
          },
          alert: { clear: 'Netejar', selected: 'Seleccionat', item: 'Article' },
          pagination: { total: { range: ' ', total: 'de', item: 'articles' } },
          tableToolBar: {
            leftPin: "Pin a l'esquerra",
            rightPin: 'Pin a la dreta',
            noPin: 'Sense Pin',
            leftFixedTitle: "Fixat a l'esquerra",
            rightFixedTitle: 'Fixat a la dreta',
            noFixedTitle: 'Sense fixar',
            reset: 'Reiniciar',
            columnDisplay: 'Mostrar Columna',
            columnSetting: 'Configuraci\xF3',
            fullScreen: 'Pantalla Completa',
            exitFullScreen: 'Sortir Pantalla Completa',
            reload: 'Refrescar',
            density: 'Densitat',
            densityDefault: 'Per Defecte',
            densityLarger: 'Llarg',
            densityMiddle: 'Mitj\xE0',
            densitySmall: 'Compacte',
          },
          stepsForm: { next: 'Seg\xFCent', prev: 'Anterior', submit: 'Finalizar' },
          loginForm: { submitText: 'Entrar' },
        },
        Xe = {
          moneySymbol: '\xA5',
          tableForm: {
            search: '\u691C\u7D22',
            reset: '\u30EA\u30BB\u30C3\u30C8',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u958B',
            expand: '\u53CE\u7D0D',
            inputPlaceholder: '\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044',
            selectPlaceholder: '\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044',
          },
          alert: {
            clear: '\u30AF\u30EA\u30A2',
            selected: '\u9078\u629E\u3057\u305F',
            item: '\u9805\u76EE',
          },
          pagination: { total: { range: '\u8A18\u4E8B', total: '/\u5408\u8A08', item: ' ' } },
          tableToolBar: {
            leftPin: '\u5DE6\u306B\u56FA\u5B9A',
            rightPin: '\u53F3\u306B\u56FA\u5B9A',
            noPin: '\u30AD\u30E3\u30F3\u30BB\u30EB',
            leftFixedTitle: '\u5DE6\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
            rightFixedTitle: '\u53F3\u306B\u56FA\u5B9A\u3055\u308C\u305F\u9805\u76EE',
            noFixedTitle: '\u56FA\u5B9A\u3055\u308C\u3066\u306A\u3044\u9805\u76EE',
            reset: '\u30EA\u30BB\u30C3\u30C8',
            columnDisplay: '\u8868\u793A\u5217',
            columnSetting: '\u5217\u8868\u793A\u8A2D\u5B9A',
            fullScreen: '\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3',
            exitFullScreen: '\u7D42\u4E86',
            reload: '\u66F4\u65B0',
            density: '\u884C\u9AD8',
            densityLarger: '\u9ED8\u8BA4',
            densityMiddle: '\u4E2D',
            densitySmall: '\u5C0F',
          },
          stepsForm: {
            next: '\u6B21\u306E\u30B9\u30C6\u30C3\u30D7',
            pre: '\u524D\u3078',
            submit: '\u9001\u4FE1',
          },
          loginForm: { submitText: '\u30ED\u30B0\u30A4\u30F3' },
        },
        at = {
          moneySymbol: '\u20BD',
          form: {
            lightFilter: {
              more: '\u0415\u0449\u0435',
              clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
              confirm: '\u041E\u041A',
              itemUnit: '\u041F\u043E\u0437\u0438\u0446\u0438\u0438',
            },
          },
          tableForm: {
            search: '\u041D\u0430\u0439\u0442\u0438',
            reset: '\u0421\u0431\u0440\u043E\u0441',
            submit: '\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C',
            collapsed: '\u0420\u0430\u0437\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
            expand: '\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C',
            inputPlaceholder:
              '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
            selectPlaceholder:
              '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435',
          },
          alert: {
            clear: '\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C',
            selected: '\u0412\u044B\u0431\u0440\u0430\u043D\u043E',
            item: '\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432',
          },
          pagination: {
            total: {
              range: ' ',
              total: '\u0438\u0437',
              item: '\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432',
            },
          },
          tableToolBar: {
            leftPin:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043B\u0435\u0432\u0430',
            rightPin:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0441\u043F\u0440\u0430\u0432\u0430',
            noPin: '\u041E\u0442\u043A\u0440\u0435\u043F\u0438\u0442\u044C',
            leftFixedTitle:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043B\u0435\u0432\u0430',
            rightFixedTitle:
              '\u0417\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E \u0441\u043F\u0440\u0430\u0432\u0430',
            noFixedTitle:
              '\u041D\u0435 \u0437\u0430\u043A\u0440\u0435\u043F\u043B\u0435\u043D\u043E',
            reset: '\u0421\u0431\u0440\u043E\u0441',
            columnDisplay:
              '\u041E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435 \u0441\u0442\u043E\u043B\u0431\u0446\u0430',
            columnSetting: '\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438',
            fullScreen: '\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D',
            exitFullScreen:
              '\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u043F\u043E\u043B\u043D\u043E\u044D\u043A\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0440\u0435\u0436\u0438\u043C\u0430',
            reload: '\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C',
            density: '\u0420\u0430\u0437\u043C\u0435\u0440',
            densityDefault: '\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E',
            densityLarger: '\u0411\u043E\u043B\u044C\u0448\u043E\u0439',
            densityMiddle: '\u0421\u0440\u0435\u0434\u043D\u0438\u0439',
            densitySmall: '\u0421\u0436\u0430\u0442\u044B\u0439',
          },
          stepsForm: {
            next: '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439',
            prev: '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u0439',
            submit: '\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C',
          },
          loginForm: { submitText: '\u0412\u0445\u043E\u0434' },
          editableTable: {
            action: {
              save: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C',
              cancel: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C',
              delete: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
            },
          },
        },
        re = {
          moneySymbol: 'RSD',
          form: {
            lightFilter: {
              more: 'Vi\u0161e',
              clear: 'O\u010Disti',
              confirm: 'Potvrdi',
              itemUnit: 'Stavke',
            },
          },
          tableForm: {
            search: 'Prona\u0111i',
            reset: 'Resetuj',
            submit: 'Po\u0161alji',
            collapsed: 'Pro\u0161iri',
            expand: 'Skupi',
            inputPlaceholder: 'Molimo unesite',
            selectPlaceholder: 'Molimo odaberite',
          },
          alert: { clear: 'O\u010Disti', selected: 'Odabrano', item: 'Stavka' },
          pagination: { total: { range: ' ', total: 'od', item: 'stavki' } },
          tableToolBar: {
            leftPin: 'Zaka\u010Di levo',
            rightPin: 'Zaka\u010Di desno',
            noPin: 'Nije zaka\u010Deno',
            leftFixedTitle: 'Fiksirano levo',
            rightFixedTitle: 'Fiksirano desno',
            noFixedTitle: 'Nije fiksirano',
            reset: 'Resetuj',
            columnDisplay: 'Prikaz kolona',
            columnSetting: 'Pode\u0161avanja',
            fullScreen: 'Pun ekran',
            exitFullScreen: 'Zatvori pun ekran',
            reload: 'Osve\u017Ei',
            density: 'Veli\u010Dina',
            densityDefault: 'Podrazumevana',
            densityLarger: 'Ve\u0107a',
            densityMiddle: 'Srednja',
            densitySmall: 'Kompaktna',
          },
          stepsForm: { next: 'Dalje', prev: 'Nazad', submit: 'Gotovo' },
          loginForm: { submitText: 'Prijavi se' },
          editableTable: {
            action: { save: 'Sa\u010Duvaj', cancel: 'Poni\u0161ti', delete: 'Obri\u0161i' },
          },
        },
        je = {
          moneySymbol: 'RM',
          tableForm: {
            search: 'Cari',
            reset: 'Menetapkan semula',
            submit: 'Hantar',
            collapsed: 'Kembang',
            expand: 'Kuncup',
            inputPlaceholder: 'Sila masuk',
            selectPlaceholder: 'Sila pilih',
          },
          alert: { clear: 'Padam', selected: 'Dipilih', item: 'Item' },
          pagination: { total: { range: ' ', total: 'daripada', item: 'item' } },
          tableToolBar: {
            leftPin: 'Pin ke kiri',
            rightPin: 'Pin ke kanan',
            noPin: 'Tidak pin',
            leftFixedTitle: 'Tetap ke kiri',
            rightFixedTitle: 'Tetap ke kanan',
            noFixedTitle: 'Tidak Tetap',
            reset: 'Menetapkan semula',
            columnDisplay: 'Lajur',
            columnSetting: 'Settings',
            fullScreen: 'Full Screen',
            exitFullScreen: 'Keluar Full Screen',
            reload: 'Muat Semula',
            density: 'Densiti',
            densityDefault: 'Biasa',
            densityLarger: 'Besar',
            densityMiddle: 'Tengah',
            densitySmall: 'Kecil',
          },
          loginForm: { submitText: 'Log Masuk' },
        },
        it = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: '\u66F4\u591A\u7BE9\u9078',
              clear: '\u6E05\u9664',
              confirm: '\u78BA\u8A8D',
              itemUnit: '\u9805',
            },
          },
          tableForm: {
            search: '\u67E5\u8A62',
            reset: '\u91CD\u7F6E',
            submit: '\u63D0\u4EA4',
            collapsed: '\u5C55\u958B',
            expand: '\u6536\u8D77',
            inputPlaceholder: '\u8ACB\u8F38\u5165',
            selectPlaceholder: '\u8ACB\u9078\u64C7',
          },
          alert: {
            clear: '\u53D6\u6D88\u9078\u64C7',
            selected: '\u5DF2\u9078\u64C7',
            item: '\u9805',
          },
          pagination: { total: { range: '\u7B2C', total: '\u689D/\u7E3D\u5171', item: '\u689D' } },
          tableToolBar: {
            leftPin: '\u56FA\u5B9A\u5230\u5DE6\u908A',
            rightPin: '\u56FA\u5B9A\u5230\u53F3\u908A',
            noPin: '\u4E0D\u56FA\u5B9A',
            leftFixedTitle: '\u56FA\u5B9A\u5728\u5DE6\u5074',
            rightFixedTitle: '\u56FA\u5B9A\u5728\u53F3\u5074',
            noFixedTitle: '\u4E0D\u56FA\u5B9A',
            reset: '\u91CD\u7F6E',
            columnDisplay: '\u5217\u5C55\u793A',
            columnSetting: '\u5217\u8A2D\u7F6E',
            fullScreen: '\u5168\u5C4F',
            exitFullScreen: '\u9000\u51FA\u5168\u5C4F',
            reload: '\u5237\u65B0',
            density: '\u5BC6\u5EA6',
            densityDefault: '\u6B63\u5E38',
            densityLarger: '\u9ED8\u8A8D',
            densityMiddle: '\u4E2D\u7B49',
            densitySmall: '\u7DCA\u6E4A',
          },
          editableTable: {
            action: { save: '\u4FDD\u5B58', cancel: '\u53D6\u6D88', delete: '\u522A\u9664' },
          },
          switch: { open: '\u6253\u958B', close: '\u95DC\u9589' },
          loginForm: { submitText: '\u767B\u5165' },
        },
        lt = {
          moneySymbol: '\u20AC',
          form: {
            lightFilter: {
              more: 'Plus',
              clear: 'Effacer',
              confirm: 'Confirmer',
              itemUnit: 'Items',
            },
          },
          tableForm: {
            search: 'Rechercher',
            reset: 'R\xE9initialiser',
            submit: 'Envoyer',
            collapsed: 'Agrandir',
            expand: 'R\xE9duire',
            inputPlaceholder: 'Entrer une valeur',
            selectPlaceholder: 'S\xE9lectionner une valeur',
          },
          alert: { clear: 'R\xE9initialiser', selected: 'S\xE9lectionn\xE9', item: 'Item' },
          pagination: { total: { range: ' ', total: 'sur', item: '\xE9l\xE9ments' } },
          tableToolBar: {
            leftPin: '\xC9pingler \xE0 gauche',
            rightPin: '\xC9pingler \xE0 gauche',
            noPin: 'Sans \xE9pingle',
            leftFixedTitle: 'Fixer \xE0 gauche',
            rightFixedTitle: 'Fixer \xE0 droite',
            noFixedTitle: 'Non fix\xE9',
            reset: 'R\xE9initialiser',
            columnDisplay: 'Affichage colonne',
            columnSetting: 'R\xE9glages',
            fullScreen: 'Plein \xE9cran',
            exitFullScreen: 'Quitter Plein \xE9cran',
            reload: 'Rafraichir',
            density: 'Densit\xE9',
            densityDefault: 'Par d\xE9faut',
            densityLarger: 'Larger',
            densityMiddle: 'Moyenne',
            densitySmall: 'Compacte',
          },
          stepsForm: { next: 'Suivante', prev: 'Pr\xE9c\xE9dente', submit: 'Finaliser' },
          loginForm: { submitText: 'Se connecter' },
          editableTable: {
            action: { save: 'Sauvegarder', cancel: 'Annuler', delete: 'Supprimer' },
          },
        },
        He = {
          moneySymbol: 'R$',
          form: {
            lightFilter: { more: 'Mais', clear: 'Limpar', confirm: 'Confirmar', itemUnit: 'Itens' },
          },
          tableForm: {
            search: 'Filtrar',
            reset: 'Limpar',
            submit: 'Confirmar',
            collapsed: 'Expandir',
            expand: 'Colapsar',
            inputPlaceholder: 'Por favor insira',
            selectPlaceholder: 'Por favor selecione',
          },
          alert: { clear: 'Limpar', selected: 'Selecionado(s)', item: 'Item(s)' },
          pagination: { total: { range: ' ', total: 'de', item: 'items' } },
          tableToolBar: {
            leftPin: 'Fixar \xE0 esquerda',
            rightPin: 'Fixar \xE0 direita',
            noPin: 'Desfixado',
            leftFixedTitle: 'Fixado \xE0 esquerda',
            rightFixedTitle: 'Fixado \xE0 direita',
            noFixedTitle: 'N\xE3o fixado',
            reset: 'Limpar',
            columnDisplay: 'Mostrar Coluna',
            columnSetting: 'Configura\xE7\xF5es',
            fullScreen: 'Tela Cheia',
            exitFullScreen: 'Sair da Tela Cheia',
            reload: 'Atualizar',
            density: 'Densidade',
            densityDefault: 'Padr\xE3o',
            densityLarger: 'Largo',
            densityMiddle: 'M\xE9dio',
            densitySmall: 'Compacto',
          },
          stepsForm: { next: 'Pr\xF3ximo', prev: 'Anterior', submit: 'Enviar' },
          loginForm: { submitText: 'Entrar' },
          editableTable: { action: { save: 'Salvar', cancel: 'Cancelar', delete: 'Apagar' } },
        },
        Zt = {
          moneySymbol: '\u20A9',
          form: {
            lightFilter: {
              more: '\uB354\uBCF4\uAE30',
              clear: '\uCDE8\uC18C',
              confirm: '\uD655\uC778',
              itemUnit: '\uAC74\uC218',
            },
          },
          tableForm: {
            search: '\uC870\uD68C',
            reset: '\uCD08\uAE30\uD654',
            submit: '\uC81C\uCD9C',
            collapsed: '\uD655\uC7A5',
            expand: '\uB2EB\uAE30',
            inputPlaceholder: '\uC785\uB825\uD574 \uC8FC\uC138\uC694',
            selectPlaceholder: '\uC120\uD0DD\uD574 \uC8FC\uC138\uC694',
          },
          alert: { clear: '\uCDE8\uC18C', selected: '\uC120\uD0DD', item: '\uAC74' },
          pagination: { total: { range: ' ', total: '/ \uCD1D', item: '\uAC74' } },
          tableToolBar: {
            leftPin: '\uC67C\uCABD\uC73C\uB85C \uD540',
            rightPin: '\uC624\uB978\uCABD\uC73C\uB85C \uD540',
            noPin: '\uD540 \uC81C\uAC70',
            leftFixedTitle: '\uC67C\uCABD\uC73C\uB85C \uACE0\uC815',
            rightFixedTitle: '\uC624\uB978\uCABD\uC73C\uB85C \uACE0\uC815',
            noFixedTitle: '\uBE44\uACE0\uC815',
            reset: '\uCD08\uAE30\uD654',
            columnDisplay: '\uCEEC\uB7FC \uD45C\uC2DC',
            columnSetting: '\uC124\uC815',
            fullScreen: '\uC804\uCCB4 \uD654\uBA74',
            exitFullScreen: '\uC804\uCCB4 \uD654\uBA74 \uCDE8\uC18C',
            reload: '\uB2E4\uC2DC \uC77D\uAE30',
            density: '\uC5EC\uBC31',
            densityDefault: '\uAE30\uBCF8',
            densityLarger: '\uB9CE\uC740 \uC5EC\uBC31',
            densityMiddle: '\uC911\uAC04 \uC5EC\uBC31',
            densitySmall: '\uC881\uC740 \uC5EC\uBC31',
          },
          stepsForm: { next: '\uB2E4\uC74C', prev: '\uC774\uC804', submit: '\uC885\uB8CC' },
          loginForm: { submitText: '\uB85C\uADF8\uC778' },
          editableTable: {
            action: { save: '\uC800\uC7A5', cancel: '\uCDE8\uC18C', delete: '\uC0AD\uC81C' },
          },
        },
        Bt = {
          moneySymbol: 'RP',
          form: {
            lightFilter: { more: 'Lebih', clear: 'Hapus', confirm: 'Konfirmasi', itemUnit: 'Unit' },
          },
          tableForm: {
            search: 'Cari',
            reset: 'Atur ulang',
            submit: 'Kirim',
            collapsed: 'Lebih sedikit',
            expand: 'Lebih banyak',
            inputPlaceholder: 'Masukkan pencarian',
            selectPlaceholder: 'Pilih',
          },
          alert: { clear: 'Hapus', selected: 'Dipilih', item: 'Butir' },
          pagination: { total: { range: ' ', total: 'Dari', item: 'Butir' } },
          tableToolBar: {
            leftPin: 'Pin kiri',
            rightPin: 'Pin kanan',
            noPin: 'Tidak ada pin',
            leftFixedTitle: 'Rata kiri',
            rightFixedTitle: 'Rata kanan',
            noFixedTitle: 'Tidak tetap',
            reset: 'Atur ulang',
            columnDisplay: 'Tampilan kolom',
            columnSetting: 'Pengaturan',
            fullScreen: 'Layar penuh',
            exitFullScreen: 'Keluar layar penuh',
            reload: 'Atur ulang',
            density: 'Kerapatan',
            densityDefault: 'Standar',
            densityLarger: 'Lebih besar',
            densityMiddle: 'Sedang',
            densitySmall: 'Rapat',
          },
          stepsForm: { next: 'Selanjutnya', prev: 'Sebelumnya', submit: 'Selesai' },
          loginForm: { submitText: 'Login' },
        },
        Ut = {
          moneySymbol: '\u20AC',
          form: {
            lightFilter: {
              more: 'Mehr',
              clear: 'Zur\xFCcksetzen',
              confirm: 'Best\xE4tigen',
              itemUnit: 'Eintr\xE4ge',
            },
          },
          tableForm: {
            search: 'Suchen',
            reset: 'Zur\xFCcksetzen',
            submit: 'Absenden',
            collapsed: 'Zeige mehr',
            expand: 'Zeige weniger',
            inputPlaceholder: 'Bitte eingeben',
            selectPlaceholder: 'Bitte ausw\xE4hlen',
          },
          alert: { clear: 'Zur\xFCcksetzen', selected: 'Ausgew\xE4hlt', item: 'Eintrag' },
          pagination: { total: { range: ' ', total: 'von', item: 'Eintr\xE4gen' } },
          tableToolBar: {
            leftPin: 'Links anheften',
            rightPin: 'Rechts anheften',
            noPin: 'Nicht angeheftet',
            leftFixedTitle: 'Links fixiert',
            rightFixedTitle: 'Rechts fixiert',
            noFixedTitle: 'Nicht fixiert',
            reset: 'Zur\xFCcksetzen',
            columnDisplay: 'Angezeigte Reihen',
            columnSetting: 'Einstellungen',
            fullScreen: 'Vollbild',
            exitFullScreen: 'Vollbild verlassen',
            reload: 'Aktualisieren',
            density: 'Abstand',
            densityDefault: 'Standard',
            densityLarger: 'Gr\xF6\xDFer',
            densityMiddle: 'Mittel',
            densitySmall: 'Kompakt',
          },
          stepsForm: { next: 'Weiter', prev: 'Zur\xFCck', submit: 'Abschlie\xDFen' },
          loginForm: { submitText: 'Anmelden' },
        },
        Jt = {
          moneySymbol: '\u062A\u0648\u0645\u0627\u0646',
          form: {
            lightFilter: {
              more: '\u0628\u06CC\u0634\u062A\u0631',
              clear: '\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646',
              confirm: '\u062A\u0627\u06CC\u06CC\u062F',
              itemUnit: '\u0645\u0648\u0631\u062F',
            },
          },
          tableForm: {
            search: '\u062C\u0633\u062A\u062C\u0648',
            reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
            submit: '\u062A\u0627\u06CC\u06CC\u062F',
            collapsed: '\u0646\u0645\u0627\u06CC\u0634 \u0628\u06CC\u0634\u062A\u0631',
            expand: '\u0646\u0645\u0627\u06CC\u0634 \u06A9\u0645\u062A\u0631',
            inputPlaceholder: '\u067E\u06CC\u062F\u0627 \u06A9\u0646\u06CC\u062F',
            selectPlaceholder: '\u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F',
          },
          alert: {
            clear: '\u067E\u0627\u06A9 \u0633\u0627\u0632\u06CC',
            selected: '\u0627\u0646\u062A\u062E\u0627\u0628',
            item: '\u0645\u0648\u0631\u062F',
          },
          pagination: {
            total: { range: ' ', total: '\u0627\u0632', item: '\u0645\u0648\u0631\u062F' },
          },
          tableToolBar: {
            leftPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0686\u067E',
            rightPin: '\u0633\u0646\u062C\u0627\u0642 \u0628\u0647 \u0631\u0627\u0633\u062A',
            noPin: '\u0633\u0646\u062C\u0627\u0642 \u0646\u0634\u062F\u0647',
            leftFixedTitle: '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0686\u067E',
            rightFixedTitle:
              '\u062B\u0627\u0628\u062A \u0634\u062F\u0647 \u062F\u0631 \u0631\u0627\u0633\u062A',
            noFixedTitle: '\u0634\u0646\u0627\u0648\u0631',
            reset: '\u0628\u0627\u0632\u0646\u0634\u0627\u0646\u06CC',
            columnDisplay: '\u0646\u0645\u0627\u06CC\u0634 \u0647\u0645\u0647',
            columnSetting: '\u062A\u0646\u0638\u06CC\u0645\u0627\u062A',
            fullScreen: '\u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
            exitFullScreen:
              '\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u062A\u0645\u0627\u0645 \u0635\u0641\u062D\u0647',
            reload: '\u062A\u0627\u0632\u0647 \u0633\u0627\u0632\u06CC',
            density: '\u062A\u0631\u0627\u06A9\u0645',
            densityDefault: '\u067E\u06CC\u0634 \u0641\u0631\u0636',
            densityLarger: '\u0628\u0632\u0631\u06AF',
            densityMiddle: '\u0645\u062A\u0648\u0633\u0637',
            densitySmall: '\u06A9\u0648\u0686\u06A9',
          },
          stepsForm: {
            next: '\u0628\u0639\u062F\u06CC',
            prev: '\u0642\u0628\u0644\u06CC',
            submit: '\u0627\u062A\u0645\u0627\u0645',
          },
          loginForm: { submitText: '\u0648\u0631\u0648\u062F' },
          editableTable: {
            action: {
              save: '\u0630\u062E\u06CC\u0631\u0647',
              cancel: '\u0644\u063A\u0648',
              delete: '\u062D\u0630\u0641',
            },
          },
        },
        ge = {
          moneySymbol: '$',
          form: {
            lightFilter: {
              more: 'Daha Fazla',
              clear: 'Temizle',
              confirm: 'Onayla',
              itemUnit: '\xD6\u011Feler',
            },
          },
          tableForm: {
            search: 'Filtrele',
            reset: 'S\u0131f\u0131rla',
            submit: 'G\xF6nder',
            collapsed: 'Daha fazla',
            expand: 'Daha az',
            inputPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer girin',
            selectPlaceholder: 'Filtrelemek i\xE7in bir de\u011Fer se\xE7in',
          },
          alert: { clear: 'Temizle', selected: 'Se\xE7ili', item: '\xD6\u011Fe' },
          pagination: { total: { range: ' ', total: 'Toplam', item: '\xD6\u011Fe' } },
          tableToolBar: {
            leftPin: 'Sola sabitle',
            rightPin: 'Sa\u011Fa sabitle',
            noPin: 'Sabitlemeyi kald\u0131r',
            leftFixedTitle: 'Sola sabitlendi',
            rightFixedTitle: 'Sa\u011Fa sabitlendi',
            noFixedTitle: 'Sabitlenmedi',
            reset: 'S\u0131f\u0131rla',
            columnDisplay: 'Kolon G\xF6r\xFCn\xFCm\xFC',
            columnSetting: 'Ayarlar',
            fullScreen: 'Tam Ekran',
            exitFullScreen: 'Tam Ekrandan \xC7\u0131k',
            reload: 'Yenile',
            density: 'Kal\u0131nl\u0131k',
            densityDefault: 'Varsay\u0131lan',
            densityLarger: 'B\xFCy\xFCk',
            densityMiddle: 'Orta',
            densitySmall: 'K\xFC\xE7\xFCk',
          },
          stepsForm: { next: 'S\u0131radaki', prev: '\xD6nceki', submit: 'G\xF6nder' },
          loginForm: { submitText: 'Giri\u015F Yap' },
          editableTable: { action: { save: 'Kaydet', cancel: 'Vazge\xE7', delete: 'Sil' } },
        },
        ot = {
          moneySymbol: 'z\u0142',
          form: {
            lightFilter: {
              more: 'Wi\u0119cej',
              clear: 'Wyczy\u015B\u0107',
              confirm: 'Potwierd\u017A',
              itemUnit: 'Ilo\u015B\u0107',
            },
          },
          tableForm: {
            search: 'Szukaj',
            reset: 'Reset',
            submit: 'Zatwierd\u017A',
            collapsed: 'Poka\u017C wiecej',
            expand: 'Poka\u017C mniej',
            inputPlaceholder: 'Prosz\u0119 poda\u0107',
            selectPlaceholder: 'Prosz\u0119 wybra\u0107',
          },
          alert: { clear: 'Wyczy\u015B\u0107', selected: 'Wybrane', item: 'Wpis' },
          pagination: { total: { range: ' ', total: 'z', item: 'Wpis\xF3w' } },
          tableToolBar: {
            leftPin: 'Przypnij do lewej',
            rightPin: 'Przypnij do prawej',
            noPin: 'Odepnij',
            leftFixedTitle: 'Przypi\u0119te do lewej',
            rightFixedTitle: 'Przypi\u0119te do prawej',
            noFixedTitle: 'Nieprzypi\u0119te',
            reset: 'Reset',
            columnDisplay: 'Wy\u015Bwietlane wiersze',
            columnSetting: 'Ustawienia',
            fullScreen: 'Pe\u0142en ekran',
            exitFullScreen: 'Zamknij pe\u0142en ekran',
            reload: 'Od\u015Bwie\u017C',
            density: 'Odst\u0119p',
            densityDefault: 'Standard',
            densityLarger: 'Wiekszy',
            densityMiddle: 'Sredni',
            densitySmall: 'Kompaktowy',
          },
          stepsForm: { next: 'Weiter', prev: 'Zur\xFCck', submit: 'Abschlie\xDFen' },
          loginForm: { submitText: 'Zaloguj si\u0119' },
        };
      function St(Ye, o, x) {
        var u = o.replace(/\[(\d+)\]/g, '.$1').split('.'),
          p = Ye,
          h = x,
          f = (0, b.Z)(u),
          w;
        try {
          for (f.s(); !(w = f.n()).done; ) {
            var V = w.value;
            if (((h = Object(p)[V]), (p = Object(p)[V]), h === void 0)) return x;
          }
        } catch (le) {
          f.e(le);
        } finally {
          f.f();
        }
        return h;
      }
      var ce = function (o, x) {
          return {
            getMessage: function (p, h) {
              return St(x, p, h) || h;
            },
            locale: o,
          };
        },
        Qe = ce('ar_EG', Ee),
        st = ce('zh_CN', W),
        Ge = ce('en_US', he),
        Xt = ce('en_GB', pe),
        ut = ce('vi_VN', Pe),
        Le = ce('it_IT', Re),
        yn = ce('ja_JP', Xe),
        Ct = ce('es_ES', Ie),
        wt = ce('ca_ES', De),
        Wn = ce('ru_RU', at),
        Pt = ce('sr_RS', re),
        Qt = ce('ms_MY', je),
        qt = ce('zh_TW', it),
        Sn = ce('fr_FR', lt),
        Cn = ce('pt_BR', He),
        Dt = ce('ko_KR', Zt),
        en = ce('id_ID', Bt),
        xt = ce('de_DE', Ut),
        tn = ce('fa_IR', Jt),
        nn = ce('tr_TR', ge),
        $t = ce('pl_PL', ot),
        Nt = {
          'ar-EG': Qe,
          'zh-CN': st,
          'en-US': Ge,
          'en-GB': Xt,
          'vi-VN': ut,
          'it-IT': Le,
          'ja-JP': yn,
          'es-ES': Ct,
          'ca-ES': wt,
          'ru-RU': Wn,
          'sr-RS': Pt,
          'ms-MY': Qt,
          'zh-TW': qt,
          'fr-FR': Sn,
          'pt-BR': Cn,
          'ko-KR': Dt,
          'id-ID': en,
          'de-DE': xt,
          'fa-IR': tn,
          'tr-TR': nn,
          'pl-PL': $t,
        },
        Bn = Object.keys(Nt),
        Et = N.createContext({
          intl: (0, t.Z)((0, t.Z)({}, st), {}, { locale: 'default' }),
          valueTypeMap: {},
        }),
        Pn = Et.Consumer,
        Un = Et.Provider,
        xn = function (o) {
          if (!o) return 'zh-CN';
          var x = o.toLocaleLowerCase();
          return Bn.find(function (u) {
            var p = u.toLocaleLowerCase();
            return p.includes(x);
          });
        },
        rn = function () {
          var o = (0, q.kY)(),
            x = o.cache;
          return (
            (0, N.useEffect)(function () {
              return function () {
                x.clear();
              };
            }, []),
            null
          );
        },
        $n = function (o) {
          var x = o.children,
            u = o.autoClearCache,
            p = u === void 0 ? !1 : u,
            h = (0, N.useContext)(I.ZP.ConfigContext),
            f = h.locale,
            w = f === void 0 ? I.ZP : N.Fragment,
            V = N.createElement(Pn, null, function (le) {
              var D,
                X = f == null ? void 0 : f.locale,
                ve = xn(X),
                Ue =
                  X && ((D = le.intl) === null || D === void 0 ? void 0 : D.locale) === 'default'
                    ? Nt[ve]
                    : le.intl || Nt[ve],
                Me = f === void 0 ? { locale: M.Z } : {};
              return N.createElement(
                w,
                Me,
                N.createElement(
                  Un,
                  { value: (0, t.Z)((0, t.Z)({}, le), {}, { intl: Ue || st }) },
                  p && N.createElement(rn, null),
                  x,
                ),
              );
            });
          return p
            ? N.createElement(
                q.J$,
                {
                  value: {
                    provider: function () {
                      return new Map();
                    },
                  },
                },
                V,
              )
            : V;
        };
      function Vn() {
        var Ye = (0, N.useContext)(Et);
        return Ye.intl || st;
      }
      var En = Et;
    },
    13788: function (Wt, ke, m) {
      'use strict';
      var K = m(37793),
        I = m(70486),
        t = m.n(I),
        b = m(66940),
        N = m(59301),
        q = function (W, he) {
          var pe = (0, N.useRef)(!1);
          (0, N.useEffect)(function () {
            if (!pe.current) pe.current = !0;
            else return W();
            return function () {};
          }, he);
        };
      function M(Ee, W, he, pe) {
        var Pe = Array.isArray(W) ? W : [],
          Re = typeof W == 'number' ? W : he || 0,
          Ie = (0, N.useRef)(),
          De = (0, N.useRef)(Ee),
          Xe = (0, N.useRef)(function () {});
        De.current = Ee;
        var at = (0, N.useCallback)(
            function () {
              pe || (Ie.current && clearTimeout(Ie.current));
            },
            [pe],
          ),
          re = (0, N.useCallback)(
            (0, b.Z)(
              t().mark(function je() {
                var it,
                  lt,
                  He,
                  Zt,
                  Bt,
                  Ut = arguments;
                return t().wrap(
                  function (ge) {
                    for (;;)
                      switch ((ge.prev = ge.next)) {
                        case 0:
                          for (it = Ut.length, lt = new Array(it), He = 0; He < it; He++)
                            lt[He] = Ut[He];
                          if (he !== 0) {
                            ge.next = 3;
                            break;
                          }
                          return ge.abrupt('return', De.current.apply(De, lt));
                        case 3:
                          return (
                            (ge.prev = 3),
                            (Zt = new Promise(function (ot, St) {
                              at(),
                                (Xe.current = St),
                                (Ie.current = setTimeout(
                                  (0, b.Z)(
                                    t().mark(function ce() {
                                      var Qe;
                                      return t().wrap(function (Ge) {
                                        for (;;)
                                          switch ((Ge.prev = Ge.next)) {
                                            case 0:
                                              return (Ge.next = 2), De.current.apply(De, lt);
                                            case 2:
                                              (Qe = Ge.sent), ot(Qe);
                                            case 4:
                                            case 'end':
                                              return Ge.stop();
                                          }
                                      }, ce);
                                    }),
                                  ),
                                  Re,
                                ));
                            })),
                            (ge.next = 7),
                            Zt
                          );
                        case 7:
                          return (Bt = ge.sent), ge.abrupt('return', Bt);
                        case 11:
                          (ge.prev = 11), (ge.t0 = ge.catch(3)), console.warn(ge.t0.message);
                        case 14:
                          return ge.abrupt('return', void 0);
                        case 15:
                        case 'end':
                          return ge.stop();
                      }
                  },
                  je,
                  null,
                  [[3, 11]],
                );
              }),
            ),
            [he, at, Re],
          );
        return (
          q(function () {
            return re(), at;
          }, [].concat((0, K.Z)(Pe), [re])),
          (0, N.useEffect)(function () {
            return function () {
              var je;
              he !== 0 &&
                ((je = Xe.current) === null ||
                  je === void 0 ||
                  je.call(Xe, new Error('useDebounceFn is unmount'))),
                at();
            };
          }, []),
          { run: re, cancel: at }
        );
      }
      ke.Z = M;
    },
    42731: function (Wt, ke) {
      'use strict';
      var m = function (I) {
        var t = {};
        if (
          (Object.keys(I || {}).forEach(function (b) {
            I[b] !== void 0 && (t[b] = I[b]);
          }),
          !(Object.keys(t).length < 1))
        )
          return t;
      };
      ke.Z = m;
    },
    81631: function (Wt, ke, m) {
      'use strict';
      var K = m(28211),
        I = m(29015),
        t = m(59301);
      function b(N, q) {
        var M = (0, t.useRef)(!1),
          Ee = (0, t.useRef)(void 0);
        (0, t.useEffect)(function () {
          return (
            (M.current = !0),
            function () {
              clearTimeout(Ee.current), (M.current = !1);
            }
          );
        }, []);
        var W = (0, I.Z)(N, q),
          he = (0, K.Z)(W, 2),
          pe = he[0],
          Pe = he[1],
          Re = function (De) {
            clearTimeout(Ee.current),
              (Ee.current = window.setTimeout(function () {
                M.current && Pe(De);
              }, 16));
          };
        return [pe, Re];
      }
      ke.Z = b;
    },
    96688: function (Wt, ke, m) {
      'use strict';
      m.d(ke, {
        Z: function () {
          return I;
        },
      });
      var K = m(69834);
      function I(t, b) {
        var N = (typeof Symbol != 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
        if (!N) {
          if (Array.isArray(t) || (N = (0, K.Z)(t)) || (b && t && typeof t.length == 'number')) {
            N && (t = N);
            var q = 0,
              M = function () {};
            return {
              s: M,
              n: function () {
                return q >= t.length ? { done: !0 } : { done: !1, value: t[q++] };
              },
              e: function (Pe) {
                throw Pe;
              },
              f: M,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var Ee = !0,
          W = !1,
          he;
        return {
          s: function () {
            N = N.call(t);
          },
          n: function () {
            var Pe = N.next();
            return (Ee = Pe.done), Pe;
          },
          e: function (Pe) {
            (W = !0), (he = Pe);
          },
          f: function () {
            try {
              !Ee && N.return != null && N.return();
            } finally {
              if (W) throw he;
            }
          },
        };
      }
    },
    60485: function () {},
    11871: function (Wt, ke, m) {
      'use strict';
      m.d(ke, {
        Z: function () {
          return xa;
        },
      });
      var K = m(10322),
        I = m(22076),
        t = m(59301),
        b = m(28211),
        N = m(12346),
        q = m(20557),
        M = m(36531),
        Ee = m(92691),
        W = m.n(Ee),
        he = m(45811),
        pe = m(10649),
        Pe = m(29015),
        Re = m(37793),
        Ie = m(11897),
        De = m(88857);
      function Xe(e) {
        var n = (0, t.useRef)(),
          r = (0, t.useRef)(!1);
        function i() {
          for (var a = arguments.length, l = new Array(a), s = 0; s < a; s++) l[s] = arguments[s];
          r.current ||
            (Ie.Z.cancel(n.current),
            (n.current = (0, Ie.Z)(function () {
              e.apply(void 0, l);
            })));
        }
        return (
          (0, t.useEffect)(function () {
            return function () {
              (r.current = !0), Ie.Z.cancel(n.current);
            };
          }, []),
          i
        );
      }
      function at(e) {
        var n = (0, t.useRef)([]),
          r = (0, t.useState)({}),
          i = (0, b.Z)(r, 2),
          a = i[1],
          l = (0, t.useRef)(typeof e == 'function' ? e() : e),
          s = Xe(function () {
            var c = l.current;
            n.current.forEach(function (v) {
              c = v(c);
            }),
              (n.current = []),
              (l.current = c),
              a({});
          });
        function d(c) {
          n.current.push(c), s();
        }
        return [l.current, d];
      }
      var re = m(22282);
      function je(e, n) {
        var r,
          i = e.prefixCls,
          a = e.id,
          l = e.active,
          s = e.tab,
          d = s.key,
          c = s.tab,
          v = s.disabled,
          g = s.closeIcon,
          R = e.closable,
          y = e.renderWrapper,
          F = e.removeAriaLabel,
          S = e.editable,
          P = e.onClick,
          B = e.onRemove,
          U = e.onFocus,
          L = e.style,
          E = ''.concat(i, '-tab');
        t.useEffect(function () {
          return B;
        }, []);
        var C = S && R !== !1 && !v;
        function A(H) {
          v || P(H);
        }
        function O(H) {
          H.preventDefault(), H.stopPropagation(), S.onEdit('remove', { key: d, event: H });
        }
        var _ = t.createElement(
          'div',
          {
            key: d,
            ref: n,
            className: W()(
              E,
              ((r = {}),
              (0, I.Z)(r, ''.concat(E, '-with-remove'), C),
              (0, I.Z)(r, ''.concat(E, '-active'), l),
              (0, I.Z)(r, ''.concat(E, '-disabled'), v),
              r),
            ),
            style: L,
            onClick: A,
          },
          t.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': l,
              id: a && ''.concat(a, '-tab-').concat(d),
              className: ''.concat(E, '-btn'),
              'aria-controls': a && ''.concat(a, '-panel-').concat(d),
              'aria-disabled': v,
              tabIndex: v ? null : 0,
              onClick: function (T) {
                T.stopPropagation(), A(T);
              },
              onKeyDown: function (T) {
                [re.Z.SPACE, re.Z.ENTER].includes(T.which) && (T.preventDefault(), A(T));
              },
              onFocus: U,
            },
            c,
          ),
          C &&
            t.createElement(
              'button',
              {
                type: 'button',
                'aria-label': F || 'remove',
                tabIndex: 0,
                className: ''.concat(E, '-remove'),
                onClick: function (T) {
                  T.stopPropagation(), O(T);
                },
              },
              g || S.removeIcon || '\xD7',
            ),
        );
        return y ? y(_) : _;
      }
      var it = t.forwardRef(je),
        lt = { width: 0, height: 0, left: 0, top: 0 };
      function He(e, n, r) {
        return (0, t.useMemo)(
          function () {
            for (
              var i,
                a = new Map(),
                l = n.get((i = e[0]) === null || i === void 0 ? void 0 : i.key) || lt,
                s = l.left + l.width,
                d = 0;
              d < e.length;
              d += 1
            ) {
              var c = e[d].key,
                v = n.get(c);
              if (!v) {
                var g;
                v = n.get((g = e[d - 1]) === null || g === void 0 ? void 0 : g.key) || lt;
              }
              var R = a.get(c) || (0, M.Z)({}, v);
              (R.right = s - R.left - R.width), a.set(c, R);
            }
            return a;
          },
          [
            e
              .map(function (i) {
                return i.key;
              })
              .join('_'),
            n,
            r,
          ],
        );
      }
      var Zt = { width: 0, height: 0, left: 0, top: 0, right: 0 };
      function Bt(e, n, r, i, a) {
        var l = a.tabs,
          s = a.tabPosition,
          d = a.rtl,
          c,
          v,
          g;
        ['top', 'bottom'].includes(s)
          ? ((c = 'width'), (v = d ? 'right' : 'left'), (g = Math.abs(n.left)))
          : ((c = 'height'), (v = 'top'), (g = -n.top));
        var R = n[c],
          y = r[c],
          F = i[c],
          S = R;
        return (
          y + F > R && (S = R - F),
          (0, t.useMemo)(
            function () {
              if (!l.length) return [0, 0];
              for (var P = l.length, B = P, U = 0; U < P; U += 1) {
                var L = e.get(l[U].key) || Zt;
                if (L[v] + L[c] > g + S) {
                  B = U - 1;
                  break;
                }
              }
              for (var E = 0, C = P - 1; C >= 0; C -= 1) {
                var A = e.get(l[C].key) || Zt;
                if (A[v] < g) {
                  E = C + 1;
                  break;
                }
              }
              return [E, B];
            },
            [
              e,
              g,
              S,
              s,
              l
                .map(function (P) {
                  return P.key;
                })
                .join('_'),
              d,
            ],
          )
        );
      }
      var Ut = m(19747),
        Jt = m.n(Ut),
        ge = m(51751),
        ot = m(32037),
        St = m(3359),
        ce = m(29860),
        Qe = m(54855),
        st = m(71512),
        Ge = m(87511),
        Xt = m(82489),
        ut = ['children', 'locked'],
        Le = t.createContext(null);
      function yn(e, n) {
        var r = (0, M.Z)({}, e);
        return (
          Object.keys(n).forEach(function (i) {
            var a = n[i];
            a !== void 0 && (r[i] = a);
          }),
          r
        );
      }
      function Ct(e) {
        var n = e.children,
          r = e.locked,
          i = (0, q.Z)(e, ut),
          a = t.useContext(Le),
          l = (0, Xt.Z)(
            function () {
              return yn(a, i);
            },
            [a, i],
            function (s, d) {
              return !r && (s[0] !== d[0] || !Jt()(s[1], d[1]));
            },
          );
        return t.createElement(Le.Provider, { value: l }, n);
      }
      function wt(e, n, r, i) {
        var a = t.useContext(Le),
          l = a.activeKey,
          s = a.onActive,
          d = a.onInactive,
          c = { active: l === e };
        return (
          n ||
            ((c.onMouseEnter = function (v) {
              r == null || r({ key: e, domEvent: v }), s(e);
            }),
            (c.onMouseLeave = function (v) {
              i == null || i({ key: e, domEvent: v }), d(e);
            })),
          c
        );
      }
      var Wn = ['item'];
      function Pt(e) {
        var n = e.item,
          r = (0, q.Z)(e, Wn);
        return (
          Object.defineProperty(r, 'item', {
            get: function () {
              return (
                (0, ge.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                n
              );
            },
          }),
          r
        );
      }
      function Qt(e) {
        var n = e.icon,
          r = e.props,
          i = e.children,
          a;
        return (
          typeof n == 'function' ? (a = t.createElement(n, (0, M.Z)({}, r))) : (a = n),
          a || i || null
        );
      }
      function qt(e) {
        var n = t.useContext(Le),
          r = n.mode,
          i = n.rtl,
          a = n.inlineIndent;
        if (r !== 'inline') return null;
        var l = e;
        return i ? { paddingRight: l * a } : { paddingLeft: l * a };
      }
      var Sn = [],
        Cn = t.createContext(null);
      function Dt() {
        return t.useContext(Cn);
      }
      var en = t.createContext(Sn);
      function xt(e) {
        var n = t.useContext(en);
        return t.useMemo(
          function () {
            return e !== void 0 ? [].concat((0, Re.Z)(n), [e]) : n;
          },
          [n, e],
        );
      }
      var tn = t.createContext(null),
        nn = t.createContext(null);
      function $t(e, n) {
        return e === void 0 ? null : ''.concat(e, '-').concat(n);
      }
      function Nt(e) {
        var n = t.useContext(nn);
        return $t(n, e);
      }
      var Bn = t.createContext({}),
        Et = Bn,
        Pn = ['title', 'attribute', 'elementRef'],
        Un = [
          'style',
          'className',
          'eventKey',
          'warnKey',
          'disabled',
          'itemIcon',
          'children',
          'role',
          'onMouseEnter',
          'onMouseLeave',
          'onClick',
          'onKeyDown',
          'onFocus',
        ],
        xn = ['active'],
        rn = (function (e) {
          (0, Qe.Z)(r, e);
          var n = (0, st.Z)(r);
          function r() {
            return (0, St.Z)(this, r), n.apply(this, arguments);
          }
          return (
            (0, ce.Z)(r, [
              {
                key: 'render',
                value: function () {
                  var a = this.props,
                    l = a.title,
                    s = a.attribute,
                    d = a.elementRef,
                    c = (0, q.Z)(a, Pn),
                    v = (0, Ge.Z)(c, ['eventKey']);
                  return (
                    (0, ge.ZP)(
                      !s,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    t.createElement(
                      ot.Z.Item,
                      (0, K.Z)({}, s, { title: typeof l == 'string' ? l : void 0 }, v, { ref: d }),
                    )
                  );
                },
              },
            ]),
            r
          );
        })(t.Component),
        $n = function (n) {
          var r,
            i = n.style,
            a = n.className,
            l = n.eventKey,
            s = n.warnKey,
            d = n.disabled,
            c = n.itemIcon,
            v = n.children,
            g = n.role,
            R = n.onMouseEnter,
            y = n.onMouseLeave,
            F = n.onClick,
            S = n.onKeyDown,
            P = n.onFocus,
            B = (0, q.Z)(n, Un),
            U = Nt(l),
            L = t.useContext(Le),
            E = L.prefixCls,
            C = L.onItemClick,
            A = L.disabled,
            O = L.overflowDisabled,
            _ = L.itemIcon,
            H = L.selectedKeys,
            T = L.onActive,
            z = t.useContext(Et),
            J = z._internalRenderMenuItem,
            Z = ''.concat(E, '-item'),
            G = t.useRef(),
            Q = t.useRef(),
            Y = A || d,
            de = xt(l),
            ae = function (we) {
              return { key: l, keyPath: (0, Re.Z)(de).reverse(), item: G.current, domEvent: we };
            },
            Te = c || _,
            ye = wt(l, Y, R, y),
            $ = ye.active,
            ie = (0, q.Z)(ye, xn),
            me = H.includes(l),
            ue = qt(de.length),
            Ze = function (we) {
              if (!Y) {
                var _e = ae(we);
                F == null || F(Pt(_e)), C(_e);
              }
            },
            oe = function (we) {
              if ((S == null || S(we), we.which === re.Z.ENTER)) {
                var _e = ae(we);
                F == null || F(Pt(_e)), C(_e);
              }
            },
            k = function (we) {
              T(l), P == null || P(we);
            },
            se = {};
          n.role === 'option' && (se['aria-selected'] = me);
          var Ne = t.createElement(
            rn,
            (0, K.Z)(
              {
                ref: G,
                elementRef: Q,
                role: g === null ? 'none' : g || 'menuitem',
                tabIndex: d ? null : -1,
                'data-menu-id': O && U ? null : U,
              },
              B,
              ie,
              se,
              {
                component: 'li',
                'aria-disabled': d,
                style: (0, M.Z)((0, M.Z)({}, ue), i),
                className: W()(
                  Z,
                  ((r = {}),
                  (0, I.Z)(r, ''.concat(Z, '-active'), $),
                  (0, I.Z)(r, ''.concat(Z, '-selected'), me),
                  (0, I.Z)(r, ''.concat(Z, '-disabled'), Y),
                  r),
                  a,
                ),
                onClick: Ze,
                onKeyDown: oe,
                onFocus: k,
              },
            ),
            v,
            t.createElement(Qt, {
              props: (0, M.Z)((0, M.Z)({}, n), {}, { isSelected: me }),
              icon: Te,
            }),
          );
          return J && (Ne = J(Ne, n, { selected: me })), Ne;
        };
      function Vn(e) {
        var n = e.eventKey,
          r = Dt(),
          i = xt(n);
        return (
          t.useEffect(
            function () {
              if (r)
                return (
                  r.registerPath(n, i),
                  function () {
                    r.unregisterPath(n, i);
                  }
                );
            },
            [i],
          ),
          r ? null : t.createElement($n, e)
        );
      }
      var En = Vn;
      function Ye(e, n) {
        return (0, he.Z)(e).map(function (r, i) {
          if (t.isValidElement(r)) {
            var a,
              l,
              s = r.key,
              d =
                (a = (l = r.props) === null || l === void 0 ? void 0 : l.eventKey) !== null &&
                a !== void 0
                  ? a
                  : s,
              c = d == null;
            c && (d = 'tmp_key-'.concat([].concat((0, Re.Z)(n), [i]).join('-')));
            var v = { key: d, eventKey: d };
            return t.cloneElement(r, v);
          }
          return r;
        });
      }
      function o(e) {
        var n = t.useRef(e);
        n.current = e;
        var r = t.useCallback(function () {
          for (var i, a = arguments.length, l = new Array(a), s = 0; s < a; s++)
            l[s] = arguments[s];
          return (i = n.current) === null || i === void 0 ? void 0 : i.call.apply(i, [n].concat(l));
        }, []);
        return e ? r : void 0;
      }
      var x = ['className', 'children'],
        u = function (n, r) {
          var i = n.className,
            a = n.children,
            l = (0, q.Z)(n, x),
            s = t.useContext(Le),
            d = s.prefixCls,
            c = s.mode,
            v = s.rtl;
          return t.createElement(
            'ul',
            (0, K.Z)(
              {
                className: W()(
                  d,
                  v && ''.concat(d, '-rtl'),
                  ''.concat(d, '-sub'),
                  ''.concat(d, '-').concat(c === 'inline' ? 'inline' : 'vertical'),
                  i,
                ),
              },
              l,
              { 'data-menu-list': !0, ref: r },
            ),
            a,
          );
        },
        p = t.forwardRef(u);
      p.displayName = 'SubMenuList';
      var h = p,
        f = m(40851),
        w = { adjustX: 1, adjustY: 1 },
        V = {
          topLeft: { points: ['bl', 'tl'], overflow: w, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: w, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: w, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: w, offset: [4, 0] },
        },
        le = {
          topLeft: { points: ['bl', 'tl'], overflow: w, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: w, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: w, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: w, offset: [4, 0] },
        },
        D = null;
      function X(e, n, r) {
        if (n) return n;
        if (r) return r[e] || r.other;
      }
      var ve = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function Ue(e) {
        var n = e.prefixCls,
          r = e.visible,
          i = e.children,
          a = e.popup,
          l = e.popupClassName,
          s = e.popupOffset,
          d = e.disabled,
          c = e.mode,
          v = e.onVisibleChange,
          g = t.useContext(Le),
          R = g.getPopupContainer,
          y = g.rtl,
          F = g.subMenuOpenDelay,
          S = g.subMenuCloseDelay,
          P = g.builtinPlacements,
          B = g.triggerSubMenuAction,
          U = g.forceSubMenuRender,
          L = g.motion,
          E = g.defaultMotions,
          C = t.useState(!1),
          A = (0, b.Z)(C, 2),
          O = A[0],
          _ = A[1],
          H = y ? (0, M.Z)((0, M.Z)({}, le), P) : (0, M.Z)((0, M.Z)({}, V), P),
          T = ve[c],
          z = X(c, L, E),
          J = (0, M.Z)(
            (0, M.Z)({}, z),
            {},
            { leavedClassName: ''.concat(n, '-hidden'), removeOnLeave: !1, motionAppear: !0 },
          ),
          Z = t.useRef();
        return (
          t.useEffect(
            function () {
              return (
                (Z.current = (0, Ie.Z)(function () {
                  _(r);
                })),
                function () {
                  Ie.Z.cancel(Z.current);
                }
              );
            },
            [r],
          ),
          t.createElement(
            f.Z,
            {
              prefixCls: n,
              popupClassName: W()(''.concat(n, '-popup'), (0, I.Z)({}, ''.concat(n, '-rtl'), y), l),
              stretch: c === 'horizontal' ? 'minWidth' : null,
              getPopupContainer: R,
              builtinPlacements: H,
              popupPlacement: T,
              popupVisible: O,
              popup: a,
              popupAlign: s && { offset: s },
              action: d ? [] : [B],
              mouseEnterDelay: F,
              mouseLeaveDelay: S,
              onPopupVisibleChange: v,
              forceRender: U,
              popupMotion: J,
            },
            i,
          )
        );
      }
      var Me = m(14100);
      function an(e) {
        var n = e.id,
          r = e.open,
          i = e.keyPath,
          a = e.children,
          l = 'inline',
          s = t.useContext(Le),
          d = s.prefixCls,
          c = s.forceSubMenuRender,
          v = s.motion,
          g = s.defaultMotions,
          R = s.mode,
          y = t.useRef(!1);
        y.current = R === l;
        var F = t.useState(!y.current),
          S = (0, b.Z)(F, 2),
          P = S[0],
          B = S[1],
          U = y.current ? r : !1;
        t.useEffect(
          function () {
            y.current && B(!1);
          },
          [R],
        );
        var L = (0, M.Z)({}, X(l, v, g));
        i.length > 1 && (L.motionAppear = !1);
        var E = L.onVisibleChanged;
        return (
          (L.onVisibleChanged = function (C) {
            return !y.current && !C && B(!0), E == null ? void 0 : E(C);
          }),
          P
            ? null
            : t.createElement(
                Ct,
                { mode: l, locked: !y.current },
                t.createElement(
                  Me.Z,
                  (0, K.Z)({ visible: U }, L, {
                    forceRender: c,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(d, '-hidden'),
                  }),
                  function (C) {
                    var A = C.className,
                      O = C.style;
                    return t.createElement(h, { id: n, className: A, style: O }, a);
                  },
                ),
              )
        );
      }
      var ln = [
          'style',
          'className',
          'title',
          'eventKey',
          'warnKey',
          'disabled',
          'internalPopupClose',
          'children',
          'itemIcon',
          'expandIcon',
          'popupClassName',
          'popupOffset',
          'onClick',
          'onMouseEnter',
          'onMouseLeave',
          'onTitleClick',
          'onTitleMouseEnter',
          'onTitleMouseLeave',
        ],
        ct = ['active'],
        dt = function (n) {
          var r,
            i = n.style,
            a = n.className,
            l = n.title,
            s = n.eventKey,
            d = n.warnKey,
            c = n.disabled,
            v = n.internalPopupClose,
            g = n.children,
            R = n.itemIcon,
            y = n.expandIcon,
            F = n.popupClassName,
            S = n.popupOffset,
            P = n.onClick,
            B = n.onMouseEnter,
            U = n.onMouseLeave,
            L = n.onTitleClick,
            E = n.onTitleMouseEnter,
            C = n.onTitleMouseLeave,
            A = (0, q.Z)(n, ln),
            O = Nt(s),
            _ = t.useContext(Le),
            H = _.prefixCls,
            T = _.mode,
            z = _.openKeys,
            J = _.disabled,
            Z = _.overflowDisabled,
            G = _.activeKey,
            Q = _.selectedKeys,
            Y = _.itemIcon,
            de = _.expandIcon,
            ae = _.onItemClick,
            Te = _.onOpenChange,
            ye = _.onActive,
            $ = t.useContext(Et),
            ie = $._internalRenderSubMenuItem,
            me = t.useContext(tn),
            ue = me.isSubPathKey,
            Ze = xt(),
            oe = ''.concat(H, '-submenu'),
            k = J || c,
            se = t.useRef(),
            Ne = t.useRef(),
            mt = R || Y,
            we = y || de,
            _e = z.includes(s),
            $e = !Z && _e,
            ht = ue(Q, s),
            pt = wt(s, k, E, C),
            Lt = pt.active,
            Se = (0, q.Z)(pt, ct),
            tt = t.useState(!1),
            nt = (0, b.Z)(tt, 2),
            Ke = nt[0],
            gt = nt[1],
            Fn = function (Je) {
              k || gt(Je);
            },
            vn = function (Je) {
              Fn(!0), B == null || B({ key: s, domEvent: Je });
            },
            bt = function (Je) {
              Fn(!1), U == null || U({ key: s, domEvent: Je });
            },
            Zn = t.useMemo(
              function () {
                return Lt || (T !== 'inline' ? Ke || ue([G], s) : !1);
              },
              [T, Lt, G, Ke, s, ue],
            ),
            wn = qt(Ze.length),
            Dn = function (Je) {
              k || (L == null || L({ key: s, domEvent: Je }), T === 'inline' && Te(s, !_e));
            },
            Nn = o(function (Be) {
              P == null || P(Pt(Be)), ae(Be);
            }),
            mn = function (Je) {
              T !== 'inline' && Te(s, Je);
            },
            Qn = function () {
              ye(s);
            },
            At = O && ''.concat(O, '-popup'),
            We = t.createElement(
              'div',
              (0, K.Z)(
                {
                  role: 'menuitem',
                  style: wn,
                  className: ''.concat(oe, '-title'),
                  tabIndex: k ? null : -1,
                  ref: se,
                  title: typeof l == 'string' ? l : null,
                  'data-menu-id': Z && O ? null : O,
                  'aria-expanded': $e,
                  'aria-haspopup': !0,
                  'aria-controls': At,
                  'aria-disabled': k,
                  onClick: Dn,
                  onFocus: Qn,
                },
                Se,
              ),
              l,
              t.createElement(
                Qt,
                {
                  icon: T !== 'horizontal' ? we : null,
                  props: (0, M.Z)((0, M.Z)({}, n), {}, { isOpen: $e, isSubMenu: !0 }),
                },
                t.createElement('i', { className: ''.concat(oe, '-arrow') }),
              ),
            ),
            On = t.useRef(T);
          if ((T !== 'inline' && (On.current = Ze.length > 1 ? 'vertical' : T), !Z)) {
            var hn = On.current;
            We = t.createElement(
              Ue,
              {
                mode: hn,
                prefixCls: oe,
                visible: !v && $e && T !== 'inline',
                popupClassName: F,
                popupOffset: S,
                popup: t.createElement(
                  Ct,
                  { mode: hn === 'horizontal' ? 'vertical' : hn },
                  t.createElement(h, { id: At, ref: Ne }, g),
                ),
                disabled: k,
                onVisibleChange: mn,
              },
              We,
            );
          }
          var _t = t.createElement(
            ot.Z.Item,
            (0, K.Z)({ role: 'none' }, A, {
              component: 'li',
              style: i,
              className: W()(
                oe,
                ''.concat(oe, '-').concat(T),
                a,
                ((r = {}),
                (0, I.Z)(r, ''.concat(oe, '-open'), $e),
                (0, I.Z)(r, ''.concat(oe, '-active'), Zn),
                (0, I.Z)(r, ''.concat(oe, '-selected'), ht),
                (0, I.Z)(r, ''.concat(oe, '-disabled'), k),
                r),
              ),
              onMouseEnter: vn,
              onMouseLeave: bt,
            }),
            We,
            !Z && t.createElement(an, { id: At, open: $e, keyPath: Ze }, g),
          );
          return (
            ie && (_t = ie(_t, n, { selected: ht, active: Zn, open: $e, disabled: k })),
            t.createElement(
              Ct,
              {
                onItemClick: Nn,
                mode: T === 'horizontal' ? 'vertical' : T,
                itemIcon: mt,
                expandIcon: we,
              },
              _t,
            )
          );
        };
      function on(e) {
        var n = e.eventKey,
          r = e.children,
          i = xt(n),
          a = Ye(r, i),
          l = Dt();
        t.useEffect(
          function () {
            if (l)
              return (
                l.registerPath(n, i),
                function () {
                  l.unregisterPath(n, i);
                }
              );
          },
          [i],
        );
        var s;
        return (
          l ? (s = a) : (s = t.createElement(dt, e, a)),
          t.createElement(en.Provider, { value: i }, s)
        );
      }
      var j = m(60810),
        zn = re.Z.LEFT,
        sn = re.Z.RIGHT,
        un = re.Z.UP,
        Ot = re.Z.DOWN,
        Rt = re.Z.ENTER,
        Rn = re.Z.ESC,
        Vt = re.Z.HOME,
        be = re.Z.END,
        jn = [un, Ot, zn, sn];
      function xr(e, n, r, i) {
        var a,
          l,
          s,
          d,
          c = 'prev',
          v = 'next',
          g = 'children',
          R = 'parent';
        if (e === 'inline' && i === Rt) return { inlineTrigger: !0 };
        var y = ((a = {}), (0, I.Z)(a, un, c), (0, I.Z)(a, Ot, v), a),
          F =
            ((l = {}),
            (0, I.Z)(l, zn, r ? v : c),
            (0, I.Z)(l, sn, r ? c : v),
            (0, I.Z)(l, Ot, g),
            (0, I.Z)(l, Rt, g),
            l),
          S =
            ((s = {}),
            (0, I.Z)(s, un, c),
            (0, I.Z)(s, Ot, v),
            (0, I.Z)(s, Rt, g),
            (0, I.Z)(s, Rn, R),
            (0, I.Z)(s, zn, r ? g : R),
            (0, I.Z)(s, sn, r ? R : g),
            s),
          P = {
            inline: y,
            horizontal: F,
            vertical: S,
            inlineSub: y,
            horizontalSub: S,
            verticalSub: S,
          },
          B = (d = P[''.concat(e).concat(n ? '' : 'Sub')]) === null || d === void 0 ? void 0 : d[i];
        switch (B) {
          case c:
            return { offset: -1, sibling: !0 };
          case v:
            return { offset: 1, sibling: !0 };
          case R:
            return { offset: -1, sibling: !1 };
          case g:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function Tt(e) {
        for (var n = e; n; ) {
          if (n.getAttribute('data-menu-list')) return n;
          n = n.parentElement;
        }
        return null;
      }
      function cn(e, n) {
        for (var r = e || document.activeElement; r; ) {
          if (n.has(r)) return r;
          r = r.parentElement;
        }
        return null;
      }
      function Hn(e, n) {
        var r = (0, j.tS)(e, !0);
        return r.filter(function (i) {
          return n.has(i);
        });
      }
      function ur(e, n, r) {
        var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
        if (!e) return null;
        var a = Hn(e, n),
          l = a.length,
          s = a.findIndex(function (d) {
            return r === d;
          });
        return (
          i < 0 ? (s === -1 ? (s = l - 1) : (s -= 1)) : i > 0 && (s += 1), (s = (s + l) % l), a[s]
        );
      }
      function Gn(e, n, r, i, a, l, s, d, c, v) {
        var g = t.useRef(),
          R = t.useRef();
        R.current = n;
        var y = function () {
          Ie.Z.cancel(g.current);
        };
        return (
          t.useEffect(function () {
            return function () {
              y();
            };
          }, []),
          function (F) {
            var S = F.which;
            if ([].concat(jn, [Rt, Rn, Vt, be]).includes(S)) {
              var P,
                B,
                U,
                L = function () {
                  (P = new Set()), (B = new Map()), (U = new Map());
                  var Y = l();
                  return (
                    Y.forEach(function (de) {
                      var ae = document.querySelector("[data-menu-id='".concat($t(i, de), "']"));
                      ae && (P.add(ae), U.set(ae, de), B.set(de, ae));
                    }),
                    P
                  );
                };
              L();
              var E = B.get(n),
                C = cn(E, P),
                A = U.get(C),
                O = xr(e, s(A, !0).length === 1, r, S);
              if (!O && S !== Vt && S !== be) return;
              (jn.includes(S) || [Vt, be].includes(S)) && F.preventDefault();
              var _ = function (Y) {
                if (Y) {
                  var de = Y,
                    ae = Y.querySelector('a');
                  (ae == null ? void 0 : ae.getAttribute('href')) && (de = ae);
                  var Te = U.get(Y);
                  d(Te),
                    y(),
                    (g.current = (0, Ie.Z)(function () {
                      R.current === Te && de.focus();
                    }));
                }
              };
              if ([Vt, be].includes(S) || O.sibling || !C) {
                var H;
                !C || e === 'inline' ? (H = a.current) : (H = Tt(C));
                var T,
                  z = Hn(H, P);
                S === Vt
                  ? (T = z[0])
                  : S === be
                  ? (T = z[z.length - 1])
                  : (T = ur(H, P, C, O.offset)),
                  _(T);
              } else if (O.inlineTrigger) c(A);
              else if (O.offset > 0)
                c(A, !0),
                  y(),
                  (g.current = (0, Ie.Z)(function () {
                    L();
                    var Q = C.getAttribute('aria-controls'),
                      Y = document.getElementById(Q),
                      de = ur(Y, P);
                    _(de);
                  }, 5));
              else if (O.offset < 0) {
                var J = s(A, !0),
                  Z = J[J.length - 2],
                  G = B.get(Z);
                c(Z, !1), _(G);
              }
            }
            v == null || v(F);
          }
        );
      }
      var Yn = Math.random().toFixed(5).toString().slice(2),
        zt = 0;
      function Jn(e) {
        var n = (0, Pe.Z)(e, { value: e }),
          r = (0, b.Z)(n, 2),
          i = r[0],
          a = r[1];
        return (
          t.useEffect(function () {
            zt += 1;
            var l = ''.concat(Yn, '-').concat(zt);
            a('rc-menu-uuid-'.concat(l));
          }, []),
          i
        );
      }
      function Tn(e) {
        Promise.resolve().then(e);
      }
      var ft = '__RC_UTIL_PATH_SPLIT__',
        cr = function (n) {
          return n.join(ft);
        },
        vt = function (n) {
          return n.split(ft);
        },
        Fe = 'rc-menu-more';
      function qe() {
        var e = t.useState({}),
          n = (0, b.Z)(e, 2),
          r = n[1],
          i = (0, t.useRef)(new Map()),
          a = (0, t.useRef)(new Map()),
          l = t.useState([]),
          s = (0, b.Z)(l, 2),
          d = s[0],
          c = s[1],
          v = (0, t.useRef)(0),
          g = (0, t.useRef)(!1),
          R = function () {
            g.current || r({});
          },
          y = (0, t.useCallback)(function (E, C) {
            var A = cr(C);
            a.current.set(A, E), i.current.set(E, A), (v.current += 1);
            var O = v.current;
            Tn(function () {
              O === v.current && R();
            });
          }, []),
          F = (0, t.useCallback)(function (E, C) {
            var A = cr(C);
            a.current.delete(A), i.current.delete(E);
          }, []),
          S = (0, t.useCallback)(function (E) {
            c(E);
          }, []),
          P = (0, t.useCallback)(
            function (E, C) {
              var A = i.current.get(E) || '',
                O = vt(A);
              return C && d.includes(O[0]) && O.unshift(Fe), O;
            },
            [d],
          ),
          B = (0, t.useCallback)(
            function (E, C) {
              return E.some(function (A) {
                var O = P(A, !0);
                return O.includes(C);
              });
            },
            [P],
          ),
          U = function () {
            var C = (0, Re.Z)(i.current.keys());
            return d.length && C.push(Fe), C;
          },
          L = (0, t.useCallback)(function (E) {
            var C = ''.concat(i.current.get(E)).concat(ft),
              A = new Set();
            return (
              (0, Re.Z)(a.current.keys()).forEach(function (O) {
                O.startsWith(C) && A.add(a.current.get(O));
              }),
              A
            );
          }, []);
        return (
          t.useEffect(function () {
            return function () {
              g.current = !0;
            };
          }, []),
          {
            registerPath: y,
            unregisterPath: F,
            refreshOverflowKeys: S,
            isSubPathKey: B,
            getKeyPath: P,
            getKeys: U,
            getSubPathKeys: L,
          }
        );
      }
      var jt = m(6177),
        Ht = [
          'prefixCls',
          'style',
          'className',
          'tabIndex',
          'children',
          'direction',
          'id',
          'mode',
          'inlineCollapsed',
          'disabled',
          'disabledOverflow',
          'subMenuOpenDelay',
          'subMenuCloseDelay',
          'forceSubMenuRender',
          'defaultOpenKeys',
          'openKeys',
          'activeKey',
          'defaultActiveFirst',
          'selectable',
          'multiple',
          'defaultSelectedKeys',
          'selectedKeys',
          'onSelect',
          'onDeselect',
          'inlineIndent',
          'motion',
          'defaultMotions',
          'triggerSubMenuAction',
          'builtinPlacements',
          'itemIcon',
          'expandIcon',
          'overflowedIndicator',
          'overflowedIndicatorPopupClassName',
          'getPopupContainer',
          'onClick',
          'onOpenChange',
          'onKeyDown',
          'openAnimation',
          'openTransitionName',
          '_internalRenderMenuItem',
          '_internalRenderSubMenuItem',
        ],
        Oe = [],
        et = t.forwardRef(function (e, n) {
          var r,
            i,
            a = e.prefixCls,
            l = a === void 0 ? 'rc-menu' : a,
            s = e.style,
            d = e.className,
            c = e.tabIndex,
            v = c === void 0 ? 0 : c,
            g = e.children,
            R = e.direction,
            y = e.id,
            F = e.mode,
            S = F === void 0 ? 'vertical' : F,
            P = e.inlineCollapsed,
            B = e.disabled,
            U = e.disabledOverflow,
            L = e.subMenuOpenDelay,
            E = L === void 0 ? 0.1 : L,
            C = e.subMenuCloseDelay,
            A = C === void 0 ? 0.1 : C,
            O = e.forceSubMenuRender,
            _ = e.defaultOpenKeys,
            H = e.openKeys,
            T = e.activeKey,
            z = e.defaultActiveFirst,
            J = e.selectable,
            Z = J === void 0 ? !0 : J,
            G = e.multiple,
            Q = G === void 0 ? !1 : G,
            Y = e.defaultSelectedKeys,
            de = e.selectedKeys,
            ae = e.onSelect,
            Te = e.onDeselect,
            ye = e.inlineIndent,
            $ = ye === void 0 ? 24 : ye,
            ie = e.motion,
            me = e.defaultMotions,
            ue = e.triggerSubMenuAction,
            Ze = ue === void 0 ? 'hover' : ue,
            oe = e.builtinPlacements,
            k = e.itemIcon,
            se = e.expandIcon,
            Ne = e.overflowedIndicator,
            mt = Ne === void 0 ? '...' : Ne,
            we = e.overflowedIndicatorPopupClassName,
            _e = e.getPopupContainer,
            $e = e.onClick,
            ht = e.onOpenChange,
            pt = e.onKeyDown,
            Lt = e.openAnimation,
            Se = e.openTransitionName,
            tt = e._internalRenderMenuItem,
            nt = e._internalRenderSubMenuItem,
            Ke = (0, q.Z)(e, Ht),
            gt = Ye(g, Oe),
            Fn = t.useState(!1),
            vn = (0, b.Z)(Fn, 2),
            bt = vn[0],
            Zn = vn[1],
            wn = t.useRef(),
            Dn = (0, jt.sQ)(wn, n),
            Nn = Jn(y),
            mn = R === 'rtl',
            Qn = t.useMemo(
              function () {
                return (S === 'inline' || S === 'vertical') && P ? ['vertical', P] : [S, !1];
              },
              [S, P],
            ),
            At = (0, b.Z)(Qn, 2),
            We = At[0],
            On = At[1],
            hn = t.useState(0),
            _t = (0, b.Z)(hn, 2),
            Be = _t[0],
            Je = _t[1],
            Gt = Be >= gt.length - 1 || We !== 'horizontal' || U,
            fr = (0, Pe.Z)(_, {
              value: H,
              postState: function (te) {
                return te || Oe;
              },
            }),
            Yt = (0, b.Z)(fr, 2),
            Ve = Yt[0],
            kn = Yt[1],
            Ln = function (te) {
              kn(te), ht == null || ht(te);
            },
            Rr = t.useState(Ve),
            qn = (0, b.Z)(Rr, 2),
            An = qn[0],
            vr = qn[1],
            pn = We === 'inline',
            _n = t.useRef(!1);
          t.useEffect(
            function () {
              pn && vr(Ve);
            },
            [Ve],
          ),
            t.useEffect(
              function () {
                if (!_n.current) {
                  _n.current = !0;
                  return;
                }
                pn ? kn(An) : Ln(Oe);
              },
              [pn],
            );
          var Mt = qe(),
            mr = Mt.registerPath,
            er = Mt.unregisterPath,
            Tr = Mt.refreshOverflowKeys,
            hr = Mt.isSubPathKey,
            Kn = Mt.getKeyPath,
            pr = Mt.getKeys,
            tr = Mt.getSubPathKeys,
            Ir = t.useMemo(
              function () {
                return { registerPath: mr, unregisterPath: er };
              },
              [mr, er],
            ),
            Mr = t.useMemo(
              function () {
                return { isSubPathKey: hr };
              },
              [hr],
            );
          t.useEffect(
            function () {
              Tr(
                Gt
                  ? Oe
                  : gt.slice(Be + 1).map(function (fe) {
                      return fe.key;
                    }),
              );
            },
            [Be, Gt],
          );
          var gr = (0, Pe.Z)(T || (z && ((r = gt[0]) === null || r === void 0 ? void 0 : r.key)), {
              value: T,
            }),
            br = (0, b.Z)(gr, 2),
            nr = br[0],
            rr = br[1],
            Fr = o(function (fe) {
              rr(fe);
            }),
            Ft = o(function () {
              rr(void 0);
            }),
            yr = (0, Pe.Z)(Y || [], {
              value: de,
              postState: function (te) {
                return Array.isArray(te) ? te : te == null ? Oe : [te];
              },
            }),
            ar = (0, b.Z)(yr, 2),
            gn = ar[0],
            bn = ar[1],
            ir = function (te) {
              if (Z) {
                var Ce = te.key,
                  rt = gn.includes(Ce),
                  yt;
                Q
                  ? rt
                    ? (yt = gn.filter(function (Pr) {
                        return Pr !== Ce;
                      }))
                    : (yt = [].concat((0, Re.Z)(gn), [Ce]))
                  : (yt = [Ce]),
                  bn(yt);
                var Cr = (0, M.Z)((0, M.Z)({}, te), {}, { selectedKeys: yt });
                rt ? Te == null || Te(Cr) : ae == null || ae(Cr);
              }
              !Q && Ve.length && We !== 'inline' && Ln(Oe);
            },
            lr = o(function (fe) {
              $e == null || $e(Pt(fe)), ir(fe);
            }),
            or = o(function (fe, te) {
              var Ce = Ve.filter(function (yt) {
                return yt !== fe;
              });
              if (te) Ce.push(fe);
              else if (We !== 'inline') {
                var rt = tr(fe);
                Ce = Ce.filter(function (yt) {
                  return !rt.has(yt);
                });
              }
              Jt()(Ve, Ce) || Ln(Ce);
            }),
            Sr = o(_e),
            ne = function (te, Ce) {
              var rt = Ce != null ? Ce : !Ve.includes(te);
              or(te, rt);
            },
            ee = Gn(We, nr, mn, Nn, wn, pr, Kn, rr, ne, pt);
          t.useEffect(function () {
            Zn(!0);
          }, []);
          var xe = t.useMemo(
              function () {
                return { _internalRenderMenuItem: tt, _internalRenderSubMenuItem: nt };
              },
              [tt, nt],
            ),
            ze =
              We !== 'horizontal' || U
                ? gt
                : gt.map(function (fe, te) {
                    return t.createElement(Ct, { key: fe.key, overflowDisabled: te > Be }, fe);
                  }),
            Kt = t.createElement(
              ot.Z,
              (0, K.Z)(
                {
                  id: y,
                  ref: Dn,
                  prefixCls: ''.concat(l, '-overflow'),
                  component: 'ul',
                  itemComponent: En,
                  className: W()(
                    l,
                    ''.concat(l, '-root'),
                    ''.concat(l, '-').concat(We),
                    d,
                    ((i = {}),
                    (0, I.Z)(i, ''.concat(l, '-inline-collapsed'), On),
                    (0, I.Z)(i, ''.concat(l, '-rtl'), mn),
                    i),
                  ),
                  dir: R,
                  style: s,
                  role: 'menu',
                  tabIndex: v,
                  data: ze,
                  renderRawItem: function (te) {
                    return te;
                  },
                  renderRawRest: function (te) {
                    var Ce = te.length,
                      rt = Ce ? gt.slice(-Ce) : null;
                    return t.createElement(
                      on,
                      {
                        eventKey: Fe,
                        title: mt,
                        disabled: Gt,
                        internalPopupClose: Ce === 0,
                        popupClassName: we,
                      },
                      rt,
                    );
                  },
                  maxCount: We !== 'horizontal' || U ? ot.Z.INVALIDATE : ot.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (te) {
                    Je(te);
                  },
                  onKeyDown: ee,
                },
                Ke,
              ),
            );
          return t.createElement(
            Et.Provider,
            { value: xe },
            t.createElement(
              nn.Provider,
              { value: Nn },
              t.createElement(
                Ct,
                {
                  prefixCls: l,
                  mode: We,
                  openKeys: Ve,
                  rtl: mn,
                  disabled: B,
                  motion: bt ? ie : null,
                  defaultMotions: bt ? me : null,
                  activeKey: nr,
                  onActive: Fr,
                  onInactive: Ft,
                  selectedKeys: gn,
                  inlineIndent: $,
                  subMenuOpenDelay: E,
                  subMenuCloseDelay: A,
                  forceSubMenuRender: O,
                  builtinPlacements: oe,
                  triggerSubMenuAction: Ze,
                  getPopupContainer: Sr,
                  itemIcon: k,
                  expandIcon: se,
                  onItemClick: lr,
                  onOpenChange: or,
                },
                t.createElement(tn.Provider, { value: Mr }, Kt),
                t.createElement(
                  'div',
                  { style: { display: 'none' }, 'aria-hidden': !0 },
                  t.createElement(Cn.Provider, { value: Ir }, gt),
                ),
              ),
            ),
          );
        }),
        dn = et,
        Ae = ['className', 'title', 'eventKey', 'children'],
        It = ['children'],
        kt = function (n) {
          var r = n.className,
            i = n.title,
            a = n.eventKey,
            l = n.children,
            s = (0, q.Z)(n, Ae),
            d = t.useContext(Le),
            c = d.prefixCls,
            v = ''.concat(c, '-item-group');
          return t.createElement(
            'li',
            (0, K.Z)({}, s, {
              onClick: function (R) {
                return R.stopPropagation();
              },
              className: W()(v, r),
            }),
            t.createElement(
              'div',
              { className: ''.concat(v, '-title'), title: typeof i == 'string' ? i : void 0 },
              i,
            ),
            t.createElement('ul', { className: ''.concat(v, '-list') }, l),
          );
        };
      function fn(e) {
        var n = e.children,
          r = (0, q.Z)(e, It),
          i = xt(r.eventKey),
          a = Ye(n, i),
          l = Dt();
        return l ? a : t.createElement(kt, (0, Ge.Z)(r, ['warnKey']), a);
      }
      function jr(e) {
        var n = e.className,
          r = e.style,
          i = t.useContext(Le),
          a = i.prefixCls,
          l = Dt();
        return l
          ? null
          : t.createElement('li', { className: W()(''.concat(a, '-item-divider'), n), style: r });
      }
      var Ia = xt,
        Xn = dn;
      (Xn.Item = En), (Xn.SubMenu = on), (Xn.ItemGroup = fn), (Xn.Divider = jr);
      var Hr = Xn,
        In = { adjustX: 1, adjustY: 1 },
        Mn = [0, 0],
        Gr = {
          topLeft: { points: ['bl', 'tl'], overflow: In, offset: [0, -4], targetOffset: Mn },
          topCenter: { points: ['bc', 'tc'], overflow: In, offset: [0, -4], targetOffset: Mn },
          topRight: { points: ['br', 'tr'], overflow: In, offset: [0, -4], targetOffset: Mn },
          bottomLeft: { points: ['tl', 'bl'], overflow: In, offset: [0, 4], targetOffset: Mn },
          bottomCenter: { points: ['tc', 'bc'], overflow: In, offset: [0, 4], targetOffset: Mn },
          bottomRight: { points: ['tr', 'br'], overflow: In, offset: [0, 4], targetOffset: Mn },
        },
        Yr = Gr,
        Jr = re.Z.ESC,
        Xr = re.Z.TAB;
      function Qr(e) {
        var n = e.visible,
          r = e.setTriggerVisible,
          i = e.triggerRef,
          a = e.menuRef,
          l = e.menuClassName,
          s = e.onVisibleChange,
          d = function () {
            n &&
              i.current &&
              (i.current.triggerRef.current && i.current.triggerRef.current.focus(),
              r(!1),
              typeof s == 'function' && s(!1));
          },
          c = function (y) {
            switch (y.keyCode) {
              case Jr:
                d();
                break;
              case Xr:
                d();
                break;
            }
          },
          v = function () {
            if (a.current) {
              var y,
                F,
                S,
                P = ((y = a.current.className) === null || y === void 0 ? void 0 : y.includes(l))
                  ? a.current
                  : (F = (S = a.current).querySelector) === null || F === void 0
                  ? void 0
                  : F.call(S, l);
              P && P.focus();
            }
          };
        t.useEffect(
          function () {
            return n
              ? (setTimeout(function () {
                  v(), window.addEventListener('keydown', c);
                }, 100),
                function () {
                  window.removeEventListener('keydown', c);
                })
              : function () {
                  return null;
                };
          },
          [n],
        );
        var g = function () {
          n &&
            i.current &&
            i.current.triggerRef.current &&
            setTimeout(function () {
              var y, F, S;
              (y = i.current) === null ||
                y === void 0 ||
                (F = y.triggerRef) === null ||
                F === void 0 ||
                (S = F.current) === null ||
                S === void 0 ||
                S.focus();
            }, 100);
        };
        return { returnFocus: g };
      }
      var qr = [
        'arrow',
        'prefixCls',
        'transitionName',
        'animation',
        'align',
        'placement',
        'placements',
        'getPopupContainer',
        'showAction',
        'hideAction',
        'overlayClassName',
        'overlayStyle',
        'visible',
        'trigger',
      ];
      function ea(e, n) {
        var r = e.arrow,
          i = r === void 0 ? !1 : r,
          a = e.prefixCls,
          l = a === void 0 ? 'rc-dropdown' : a,
          s = e.transitionName,
          d = e.animation,
          c = e.align,
          v = e.placement,
          g = v === void 0 ? 'bottomLeft' : v,
          R = e.placements,
          y = R === void 0 ? Yr : R,
          F = e.getPopupContainer,
          S = e.showAction,
          P = e.hideAction,
          B = e.overlayClassName,
          U = e.overlayStyle,
          L = e.visible,
          E = e.trigger,
          C = E === void 0 ? ['hover'] : E,
          A = (0, q.Z)(e, qr),
          O = t.useState(),
          _ = (0, b.Z)(O, 2),
          H = _[0],
          T = _[1],
          z = 'visible' in e ? L : H,
          J = t.useRef(null);
        t.useImperativeHandle(n, function () {
          return J.current;
        });
        var Z = t.useRef(null),
          G = ''.concat(l, '-menu'),
          Q = Qr({
            visible: z,
            setTriggerVisible: T,
            triggerRef: J,
            menuRef: Z,
            menuClassName: G,
            onVisibleChange: e.onVisibleChange,
          }),
          Y = Q.returnFocus,
          de = function () {
            var k = e.overlay,
              se;
            return typeof k == 'function' ? (se = k()) : (se = k), se;
          },
          ae = function (k) {
            var se = e.onOverlayClick,
              Ne = de().props;
            T(!1), se && se(k), Ne.onClick && Ne.onClick(k), Y();
          },
          Te = function (k) {
            var se = e.onVisibleChange;
            T(k), typeof se == 'function' && se(k);
          },
          ye = function () {
            var k = de(),
              se = { prefixCls: G, onClick: ae, ref: (0, jt.Yr)(k) ? Z : void 0 };
            return (
              typeof k.type == 'string' && delete se.prefixCls,
              t.createElement(
                t.Fragment,
                null,
                i && t.createElement('div', { className: ''.concat(l, '-arrow') }),
                t.cloneElement(k, se),
              )
            );
          },
          $ = function () {
            var k = e.overlay;
            return typeof k == 'function' ? ye : ye();
          },
          ie = function () {
            var k = e.minOverlayWidthMatchTrigger,
              se = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? k : !se;
          },
          me = function () {
            var k = e.openClassName;
            return k !== void 0 ? k : ''.concat(l, '-open');
          },
          ue = function () {
            var k = e.children,
              se = k.props ? k.props : {},
              Ne = W()(se.className, me());
            return z && k ? t.cloneElement(k, { className: Ne }) : k;
          },
          Ze = P;
        return (
          !Ze && C.indexOf('contextMenu') !== -1 && (Ze = ['click']),
          t.createElement(
            f.Z,
            (0, M.Z)(
              (0, M.Z)({ builtinPlacements: y }, A),
              {},
              {
                prefixCls: l,
                ref: J,
                popupClassName: W()(B, (0, I.Z)({}, ''.concat(l, '-show-arrow'), i)),
                popupStyle: U,
                action: C,
                showAction: S,
                hideAction: Ze || [],
                popupPlacement: g,
                popupAlign: c,
                popupTransitionName: s,
                popupAnimation: d,
                popupVisible: z,
                stretch: ie() ? 'minWidth' : '',
                popup: $(),
                onPopupVisibleChange: Te,
                getPopupContainer: F,
              },
            ),
            ue(),
          )
        );
      }
      var ta = t.forwardRef(ea),
        na = ta;
      function ra(e, n) {
        var r = e.prefixCls,
          i = e.editable,
          a = e.locale,
          l = e.style;
        return !i || i.showAdd === !1
          ? null
          : t.createElement(
              'button',
              {
                ref: n,
                type: 'button',
                className: ''.concat(r, '-nav-add'),
                style: l,
                'aria-label': (a == null ? void 0 : a.addAriaLabel) || 'Add tab',
                onClick: function (d) {
                  i.onEdit('add', { event: d });
                },
              },
              i.addIcon || '+',
            );
      }
      var Zr = t.forwardRef(ra);
      function aa(e, n) {
        var r = e.prefixCls,
          i = e.id,
          a = e.tabs,
          l = e.locale,
          s = e.mobile,
          d = e.moreIcon,
          c = d === void 0 ? 'More' : d,
          v = e.moreTransitionName,
          g = e.style,
          R = e.className,
          y = e.editable,
          F = e.tabBarGutter,
          S = e.rtl,
          P = e.removeAriaLabel,
          B = e.onTabClick,
          U = (0, t.useState)(!1),
          L = (0, b.Z)(U, 2),
          E = L[0],
          C = L[1],
          A = (0, t.useState)(null),
          O = (0, b.Z)(A, 2),
          _ = O[0],
          H = O[1],
          T = ''.concat(i, '-more-popup'),
          z = ''.concat(r, '-dropdown'),
          J = _ !== null ? ''.concat(T, '-').concat(_) : null,
          Z = l == null ? void 0 : l.dropdownAriaLabel;
        function G($, ie) {
          $.preventDefault(), $.stopPropagation(), y.onEdit('remove', { key: ie, event: $ });
        }
        var Q = t.createElement(
          Hr,
          {
            onClick: function (ie) {
              var me = ie.key,
                ue = ie.domEvent;
              B(me, ue), C(!1);
            },
            id: T,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': J,
            selectedKeys: [_],
            'aria-label': Z !== void 0 ? Z : 'expanded dropdown',
          },
          a.map(function ($) {
            var ie = y && $.closable !== !1 && !$.disabled;
            return t.createElement(
              En,
              {
                key: $.key,
                id: ''.concat(T, '-').concat($.key),
                role: 'option',
                'aria-controls': i && ''.concat(i, '-panel-').concat($.key),
                disabled: $.disabled,
              },
              t.createElement('span', null, $.tab),
              ie &&
                t.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': P || 'remove',
                    tabIndex: 0,
                    className: ''.concat(z, '-menu-item-remove'),
                    onClick: function (ue) {
                      ue.stopPropagation(), G(ue, $.key);
                    },
                  },
                  $.closeIcon || y.removeIcon || '\xD7',
                ),
            );
          }),
        );
        function Y($) {
          for (
            var ie = a.filter(function (k) {
                return !k.disabled;
              }),
              me =
                ie.findIndex(function (k) {
                  return k.key === _;
                }) || 0,
              ue = ie.length,
              Ze = 0;
            Ze < ue;
            Ze += 1
          ) {
            me = (me + $ + ue) % ue;
            var oe = ie[me];
            if (!oe.disabled) {
              H(oe.key);
              return;
            }
          }
        }
        function de($) {
          var ie = $.which;
          if (!E) {
            [re.Z.DOWN, re.Z.SPACE, re.Z.ENTER].includes(ie) && (C(!0), $.preventDefault());
            return;
          }
          switch (ie) {
            case re.Z.UP:
              Y(-1), $.preventDefault();
              break;
            case re.Z.DOWN:
              Y(1), $.preventDefault();
              break;
            case re.Z.ESC:
              C(!1);
              break;
            case re.Z.SPACE:
            case re.Z.ENTER:
              _ !== null && B(_, $);
              break;
          }
        }
        (0, t.useEffect)(
          function () {
            var $ = document.getElementById(J);
            $ && $.scrollIntoView && $.scrollIntoView(!1);
          },
          [_],
        ),
          (0, t.useEffect)(
            function () {
              E || H(null);
            },
            [E],
          );
        var ae = (0, I.Z)({}, S ? 'marginRight' : 'marginLeft', F);
        a.length || ((ae.visibility = 'hidden'), (ae.order = 1));
        var Te = W()((0, I.Z)({}, ''.concat(z, '-rtl'), S)),
          ye = s
            ? null
            : t.createElement(
                na,
                {
                  prefixCls: z,
                  overlay: Q,
                  trigger: ['hover'],
                  visible: E,
                  transitionName: v,
                  onVisibleChange: C,
                  overlayClassName: Te,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                t.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(r, '-nav-more'),
                    style: ae,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': T,
                    id: ''.concat(i, '-more'),
                    'aria-expanded': E,
                    onKeyDown: de,
                  },
                  c,
                ),
              );
        return t.createElement(
          'div',
          { className: W()(''.concat(r, '-nav-operations'), R), style: g, ref: n },
          ye,
          t.createElement(Zr, { prefixCls: r, locale: l, editable: y }),
        );
      }
      var ia = t.memo(t.forwardRef(aa), function (e, n) {
          return n.tabMoving;
        }),
        Er = (0, t.createContext)(null),
        la = 0.1,
        wr = 0.01,
        dr = 20,
        Dr = Math.pow(0.995, dr);
      function oa(e, n) {
        var r = (0, t.useState)(),
          i = (0, b.Z)(r, 2),
          a = i[0],
          l = i[1],
          s = (0, t.useState)(0),
          d = (0, b.Z)(s, 2),
          c = d[0],
          v = d[1],
          g = (0, t.useState)(0),
          R = (0, b.Z)(g, 2),
          y = R[0],
          F = R[1],
          S = (0, t.useState)(),
          P = (0, b.Z)(S, 2),
          B = P[0],
          U = P[1],
          L = (0, t.useRef)();
        function E(T) {
          var z = T.touches[0],
            J = z.screenX,
            Z = z.screenY;
          l({ x: J, y: Z }), window.clearInterval(L.current);
        }
        function C(T) {
          if (!!a) {
            T.preventDefault();
            var z = T.touches[0],
              J = z.screenX,
              Z = z.screenY;
            l({ x: J, y: Z });
            var G = J - a.x,
              Q = Z - a.y;
            n(G, Q);
            var Y = Date.now();
            v(Y), F(Y - c), U({ x: G, y: Q });
          }
        }
        function A() {
          if (!!a && (l(null), U(null), B)) {
            var T = B.x / y,
              z = B.y / y,
              J = Math.abs(T),
              Z = Math.abs(z);
            if (Math.max(J, Z) < la) return;
            var G = T,
              Q = z;
            L.current = window.setInterval(function () {
              if (Math.abs(G) < wr && Math.abs(Q) < wr) {
                window.clearInterval(L.current);
                return;
              }
              (G *= Dr), (Q *= Dr), n(G * dr, Q * dr);
            }, dr);
          }
        }
        var O = (0, t.useRef)();
        function _(T) {
          var z = T.deltaX,
            J = T.deltaY,
            Z = 0,
            G = Math.abs(z),
            Q = Math.abs(J);
          G === Q
            ? (Z = O.current === 'x' ? z : J)
            : G > Q
            ? ((Z = z), (O.current = 'x'))
            : ((Z = J), (O.current = 'y')),
            n(-Z, -Z) && T.preventDefault();
        }
        var H = (0, t.useRef)(null);
        (H.current = { onTouchStart: E, onTouchMove: C, onTouchEnd: A, onWheel: _ }),
          t.useEffect(function () {
            function T(G) {
              H.current.onTouchStart(G);
            }
            function z(G) {
              H.current.onTouchMove(G);
            }
            function J(G) {
              H.current.onTouchEnd(G);
            }
            function Z(G) {
              H.current.onWheel(G);
            }
            return (
              document.addEventListener('touchmove', z, { passive: !1 }),
              document.addEventListener('touchend', J, { passive: !1 }),
              e.current.addEventListener('touchstart', T, { passive: !1 }),
              e.current.addEventListener('wheel', Z),
              function () {
                document.removeEventListener('touchmove', z),
                  document.removeEventListener('touchend', J);
              }
            );
          }, []);
      }
      function sa() {
        var e = (0, t.useRef)(new Map());
        function n(i) {
          return e.current.has(i) || e.current.set(i, t.createRef()), e.current.get(i);
        }
        function r(i) {
          e.current.delete(i);
        }
        return [n, r];
      }
      function Nr(e, n) {
        var r = t.useRef(e),
          i = t.useState({}),
          a = (0, b.Z)(i, 2),
          l = a[1];
        function s(d) {
          var c = typeof d == 'function' ? d(r.current) : d;
          c !== r.current && n(c, r.current), (r.current = c), l({});
        }
        return [r.current, s];
      }
      var Or = function (n) {
        var r = n.position,
          i = n.prefixCls,
          a = n.extra;
        if (!a) return null;
        var l,
          s = {};
        return (
          a && (0, N.Z)(a) === 'object' && !t.isValidElement(a) ? (s = a) : (s.right = a),
          r === 'right' && (l = s.right),
          r === 'left' && (l = s.left),
          l ? t.createElement('div', { className: ''.concat(i, '-extra-content') }, l) : null
        );
      };
      function ua(e, n) {
        var r,
          i = t.useContext(Er),
          a = i.prefixCls,
          l = i.tabs,
          s = e.className,
          d = e.style,
          c = e.id,
          v = e.animated,
          g = e.activeKey,
          R = e.rtl,
          y = e.extra,
          F = e.editable,
          S = e.locale,
          P = e.tabPosition,
          B = e.tabBarGutter,
          U = e.children,
          L = e.onTabClick,
          E = e.onTabScroll,
          C = (0, t.useRef)(),
          A = (0, t.useRef)(),
          O = (0, t.useRef)(),
          _ = (0, t.useRef)(),
          H = sa(),
          T = (0, b.Z)(H, 2),
          z = T[0],
          J = T[1],
          Z = P === 'top' || P === 'bottom',
          G = Nr(0, function (ne, ee) {
            Z && E && E({ direction: ne > ee ? 'left' : 'right' });
          }),
          Q = (0, b.Z)(G, 2),
          Y = Q[0],
          de = Q[1],
          ae = Nr(0, function (ne, ee) {
            !Z && E && E({ direction: ne > ee ? 'top' : 'bottom' });
          }),
          Te = (0, b.Z)(ae, 2),
          ye = Te[0],
          $ = Te[1],
          ie = (0, t.useState)(0),
          me = (0, b.Z)(ie, 2),
          ue = me[0],
          Ze = me[1],
          oe = (0, t.useState)(0),
          k = (0, b.Z)(oe, 2),
          se = k[0],
          Ne = k[1],
          mt = (0, t.useState)(0),
          we = (0, b.Z)(mt, 2),
          _e = we[0],
          $e = we[1],
          ht = (0, t.useState)(0),
          pt = (0, b.Z)(ht, 2),
          Lt = pt[0],
          Se = pt[1],
          tt = (0, t.useState)(null),
          nt = (0, b.Z)(tt, 2),
          Ke = nt[0],
          gt = nt[1],
          Fn = (0, t.useState)(null),
          vn = (0, b.Z)(Fn, 2),
          bt = vn[0],
          Zn = vn[1],
          wn = (0, t.useState)(0),
          Dn = (0, b.Z)(wn, 2),
          Nn = Dn[0],
          mn = Dn[1],
          Qn = (0, t.useState)(0),
          At = (0, b.Z)(Qn, 2),
          We = At[0],
          On = At[1],
          hn = at(new Map()),
          _t = (0, b.Z)(hn, 2),
          Be = _t[0],
          Je = _t[1],
          Gt = He(l, Be, ue),
          fr = ''.concat(a, '-nav-operations-hidden'),
          Yt = 0,
          Ve = 0;
        Z
          ? R
            ? ((Yt = 0), (Ve = Math.max(0, ue - Ke)))
            : ((Yt = Math.min(0, Ke - ue)), (Ve = 0))
          : ((Yt = Math.min(0, bt - se)), (Ve = 0));
        function kn(ne) {
          return ne < Yt ? Yt : ne > Ve ? Ve : ne;
        }
        var Ln = (0, t.useRef)(),
          Rr = (0, t.useState)(),
          qn = (0, b.Z)(Rr, 2),
          An = qn[0],
          vr = qn[1];
        function pn() {
          vr(Date.now());
        }
        function _n() {
          window.clearTimeout(Ln.current);
        }
        oa(C, function (ne, ee) {
          function xe(ze, Kt) {
            ze(function (fe) {
              var te = kn(fe + Kt);
              return te;
            });
          }
          if (Z) {
            if (Ke >= ue) return !1;
            xe(de, ne);
          } else {
            if (bt >= se) return !1;
            xe($, ee);
          }
          return _n(), pn(), !0;
        }),
          (0, t.useEffect)(
            function () {
              return (
                _n(),
                An &&
                  (Ln.current = window.setTimeout(function () {
                    vr(0);
                  }, 100)),
                _n
              );
            },
            [An],
          );
        function Mt() {
          var ne = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : g,
            ee = Gt.get(ne) || { width: 0, height: 0, left: 0, right: 0, top: 0 };
          if (Z) {
            var xe = Y;
            R
              ? ee.right < Y
                ? (xe = ee.right)
                : ee.right + ee.width > Y + Ke && (xe = ee.right + ee.width - Ke)
              : ee.left < -Y
              ? (xe = -ee.left)
              : ee.left + ee.width > -Y + Ke && (xe = -(ee.left + ee.width - Ke)),
              $(0),
              de(kn(xe));
          } else {
            var ze = ye;
            ee.top < -ye
              ? (ze = -ee.top)
              : ee.top + ee.height > -ye + bt && (ze = -(ee.top + ee.height - bt)),
              de(0),
              $(kn(ze));
          }
        }
        var mr = Bt(
            Gt,
            { width: Ke, height: bt, left: Y, top: ye },
            { width: _e, height: Lt },
            { width: Nn, height: We },
            (0, M.Z)((0, M.Z)({}, e), {}, { tabs: l }),
          ),
          er = (0, b.Z)(mr, 2),
          Tr = er[0],
          hr = er[1],
          Kn = {};
        P === 'top' || P === 'bottom'
          ? (Kn[R ? 'marginRight' : 'marginLeft'] = B)
          : (Kn.marginTop = B);
        var pr = l.map(function (ne, ee) {
            var xe = ne.key;
            return t.createElement(it, {
              id: c,
              prefixCls: a,
              key: xe,
              tab: ne,
              style: ee === 0 ? void 0 : Kn,
              closable: ne.closable,
              editable: F,
              active: xe === g,
              renderWrapper: U,
              removeAriaLabel: S == null ? void 0 : S.removeAriaLabel,
              ref: z(xe),
              onClick: function (Kt) {
                L(xe, Kt);
              },
              onRemove: function () {
                J(xe);
              },
              onFocus: function () {
                Mt(xe),
                  pn(),
                  !!C.current && (R || (C.current.scrollLeft = 0), (C.current.scrollTop = 0));
              },
            });
          }),
          tr = Xe(function () {
            var ne,
              ee,
              xe,
              ze,
              Kt,
              fe,
              te,
              Ce,
              rt,
              yt = ((ne = C.current) === null || ne === void 0 ? void 0 : ne.offsetWidth) || 0,
              Cr = ((ee = C.current) === null || ee === void 0 ? void 0 : ee.offsetHeight) || 0,
              Pr = ((xe = _.current) === null || xe === void 0 ? void 0 : xe.offsetWidth) || 0,
              Wr = ((ze = _.current) === null || ze === void 0 ? void 0 : ze.offsetHeight) || 0,
              Ea = ((Kt = O.current) === null || Kt === void 0 ? void 0 : Kt.offsetWidth) || 0,
              Ra = ((fe = O.current) === null || fe === void 0 ? void 0 : fe.offsetHeight) || 0;
            gt(yt), Zn(Cr), mn(Pr), On(Wr);
            var Br =
                (((te = A.current) === null || te === void 0 ? void 0 : te.offsetWidth) || 0) - Pr,
              Ur =
                (((Ce = A.current) === null || Ce === void 0 ? void 0 : Ce.offsetHeight) || 0) - Wr;
            Ze(Br), Ne(Ur);
            var $r =
              (rt = O.current) === null || rt === void 0 ? void 0 : rt.className.includes(fr);
            $e(Br - ($r ? 0 : Ea)),
              Se(Ur - ($r ? 0 : Ra)),
              Je(function () {
                var Vr = new Map();
                return (
                  l.forEach(function (Ta) {
                    var zr = Ta.key,
                      sr = z(zr).current;
                    sr &&
                      Vr.set(zr, {
                        width: sr.offsetWidth,
                        height: sr.offsetHeight,
                        left: sr.offsetLeft,
                        top: sr.offsetTop,
                      });
                  }),
                  Vr
                );
              });
          }),
          Ir = l.slice(0, Tr),
          Mr = l.slice(hr + 1),
          gr = [].concat((0, Re.Z)(Ir), (0, Re.Z)(Mr)),
          br = (0, t.useState)(),
          nr = (0, b.Z)(br, 2),
          rr = nr[0],
          Fr = nr[1],
          Ft = Gt.get(g),
          yr = (0, t.useRef)();
        function ar() {
          Ie.Z.cancel(yr.current);
        }
        (0, t.useEffect)(
          function () {
            var ne = {};
            return (
              Ft &&
                (Z
                  ? (R ? (ne.right = Ft.right) : (ne.left = Ft.left), (ne.width = Ft.width))
                  : ((ne.top = Ft.top), (ne.height = Ft.height))),
              ar(),
              (yr.current = (0, Ie.Z)(function () {
                Fr(ne);
              })),
              ar
            );
          },
          [Ft, Z, R],
        ),
          (0, t.useEffect)(
            function () {
              Mt();
            },
            [g, Ft, Gt, Z],
          ),
          (0, t.useEffect)(
            function () {
              tr();
            },
            [
              R,
              B,
              g,
              l
                .map(function (ne) {
                  return ne.key;
                })
                .join('_'),
            ],
          );
        var gn = !!gr.length,
          bn = ''.concat(a, '-nav-wrap'),
          ir,
          lr,
          or,
          Sr;
        return (
          Z
            ? R
              ? ((lr = Y > 0), (ir = Y + Ke < ue))
              : ((ir = Y < 0), (lr = -Y + Ke < ue))
            : ((or = ye < 0), (Sr = -ye + bt < se)),
          t.createElement(
            'div',
            {
              ref: n,
              role: 'tablist',
              className: W()(''.concat(a, '-nav'), s),
              style: d,
              onKeyDown: function () {
                pn();
              },
            },
            t.createElement(Or, { position: 'left', extra: y, prefixCls: a }),
            t.createElement(
              De.Z,
              { onResize: tr },
              t.createElement(
                'div',
                {
                  className: W()(
                    bn,
                    ((r = {}),
                    (0, I.Z)(r, ''.concat(bn, '-ping-left'), ir),
                    (0, I.Z)(r, ''.concat(bn, '-ping-right'), lr),
                    (0, I.Z)(r, ''.concat(bn, '-ping-top'), or),
                    (0, I.Z)(r, ''.concat(bn, '-ping-bottom'), Sr),
                    r),
                  ),
                  ref: C,
                },
                t.createElement(
                  De.Z,
                  { onResize: tr },
                  t.createElement(
                    'div',
                    {
                      ref: A,
                      className: ''.concat(a, '-nav-list'),
                      style: {
                        transform: 'translate('.concat(Y, 'px, ').concat(ye, 'px)'),
                        transition: An ? 'none' : void 0,
                      },
                    },
                    pr,
                    t.createElement(Zr, {
                      ref: _,
                      prefixCls: a,
                      locale: S,
                      editable: F,
                      style: (0, M.Z)(
                        (0, M.Z)({}, pr.length === 0 ? void 0 : Kn),
                        {},
                        { visibility: gn ? 'hidden' : null },
                      ),
                    }),
                    t.createElement('div', {
                      className: W()(
                        ''.concat(a, '-ink-bar'),
                        (0, I.Z)({}, ''.concat(a, '-ink-bar-animated'), v.inkBar),
                      ),
                      style: rr,
                    }),
                  ),
                ),
              ),
            ),
            t.createElement(
              ia,
              (0, K.Z)({}, e, {
                removeAriaLabel: S == null ? void 0 : S.removeAriaLabel,
                ref: O,
                prefixCls: a,
                tabs: gr,
                className: !gn && fr,
                tabMoving: !!An,
              }),
            ),
            t.createElement(Or, { position: 'right', extra: y, prefixCls: a }),
          )
        );
      }
      var kr = t.forwardRef(ua);
      function ca(e) {
        var n = e.id,
          r = e.activeKey,
          i = e.animated,
          a = e.tabPosition,
          l = e.rtl,
          s = e.destroyInactiveTabPane,
          d = t.useContext(Er),
          c = d.prefixCls,
          v = d.tabs,
          g = i.tabPane,
          R = v.findIndex(function (y) {
            return y.key === r;
          });
        return t.createElement(
          'div',
          { className: W()(''.concat(c, '-content-holder')) },
          t.createElement(
            'div',
            {
              className: W()(
                ''.concat(c, '-content'),
                ''.concat(c, '-content-').concat(a),
                (0, I.Z)({}, ''.concat(c, '-content-animated'), g),
              ),
              style:
                R && g
                  ? (0, I.Z)({}, l ? 'marginRight' : 'marginLeft', '-'.concat(R, '00%'))
                  : null,
            },
            v.map(function (y) {
              return t.cloneElement(y.node, {
                key: y.key,
                prefixCls: c,
                tabKey: y.key,
                id: n,
                animated: g,
                active: y.key === r,
                destroyInactiveTabPane: s,
              });
            }),
          ),
        );
      }
      function Lr(e) {
        var n = e.prefixCls,
          r = e.forceRender,
          i = e.className,
          a = e.style,
          l = e.id,
          s = e.active,
          d = e.animated,
          c = e.destroyInactiveTabPane,
          v = e.tabKey,
          g = e.children,
          R = t.useState(r),
          y = (0, b.Z)(R, 2),
          F = y[0],
          S = y[1];
        t.useEffect(
          function () {
            s ? S(!0) : c && S(!1);
          },
          [s, c],
        );
        var P = {};
        return (
          s ||
            (d
              ? ((P.visibility = 'hidden'), (P.height = 0), (P.overflowY = 'hidden'))
              : (P.display = 'none')),
          t.createElement(
            'div',
            {
              id: l && ''.concat(l, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: s ? 0 : -1,
              'aria-labelledby': l && ''.concat(l, '-tab-').concat(v),
              'aria-hidden': !s,
              style: (0, M.Z)((0, M.Z)({}, P), a),
              className: W()(''.concat(n, '-tabpane'), s && ''.concat(n, '-tabpane-active'), i),
            },
            (s || F || r) && g,
          )
        );
      }
      var da = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        Ar = 0;
      function fa(e) {
        return (0, he.Z)(e)
          .map(function (n) {
            if (t.isValidElement(n)) {
              var r = n.key !== void 0 ? String(n.key) : void 0;
              return (0, M.Z)((0, M.Z)({ key: r }, n.props), {}, { node: n });
            }
            return null;
          })
          .filter(function (n) {
            return n;
          });
      }
      function va(e, n) {
        var r,
          i = e.id,
          a = e.prefixCls,
          l = a === void 0 ? 'rc-tabs' : a,
          s = e.className,
          d = e.children,
          c = e.direction,
          v = e.activeKey,
          g = e.defaultActiveKey,
          R = e.editable,
          y = e.animated,
          F = y === void 0 ? { inkBar: !0, tabPane: !1 } : y,
          S = e.tabPosition,
          P = S === void 0 ? 'top' : S,
          B = e.tabBarGutter,
          U = e.tabBarStyle,
          L = e.tabBarExtraContent,
          E = e.locale,
          C = e.moreIcon,
          A = e.moreTransitionName,
          O = e.destroyInactiveTabPane,
          _ = e.renderTabBar,
          H = e.onChange,
          T = e.onTabClick,
          z = e.onTabScroll,
          J = (0, q.Z)(e, da),
          Z = fa(d),
          G = c === 'rtl',
          Q;
        F === !1
          ? (Q = { inkBar: !1, tabPane: !1 })
          : F === !0
          ? (Q = { inkBar: !0, tabPane: !0 })
          : (Q = (0, M.Z)({ inkBar: !0, tabPane: !1 }, (0, N.Z)(F) === 'object' ? F : {}));
        var Y = (0, t.useState)(!1),
          de = (0, b.Z)(Y, 2),
          ae = de[0],
          Te = de[1];
        (0, t.useEffect)(function () {
          Te((0, pe.Z)());
        }, []);
        var ye = (0, Pe.Z)(
            function () {
              var Se;
              return (Se = Z[0]) === null || Se === void 0 ? void 0 : Se.key;
            },
            { value: v, defaultValue: g },
          ),
          $ = (0, b.Z)(ye, 2),
          ie = $[0],
          me = $[1],
          ue = (0, t.useState)(function () {
            return Z.findIndex(function (Se) {
              return Se.key === ie;
            });
          }),
          Ze = (0, b.Z)(ue, 2),
          oe = Ze[0],
          k = Ze[1];
        (0, t.useEffect)(
          function () {
            var Se = Z.findIndex(function (nt) {
              return nt.key === ie;
            });
            if (Se === -1) {
              var tt;
              (Se = Math.max(0, Math.min(oe, Z.length - 1))),
                me((tt = Z[Se]) === null || tt === void 0 ? void 0 : tt.key);
            }
            k(Se);
          },
          [
            Z.map(function (Se) {
              return Se.key;
            }).join('_'),
            ie,
            oe,
          ],
        );
        var se = (0, Pe.Z)(null, { value: i }),
          Ne = (0, b.Z)(se, 2),
          mt = Ne[0],
          we = Ne[1],
          _e = P;
        ae && !['left', 'right'].includes(P) && (_e = 'top'),
          (0, t.useEffect)(function () {
            i || (we('rc-tabs-'.concat(Ar)), (Ar += 1));
          }, []);
        function $e(Se, tt) {
          T == null || T(Se, tt);
          var nt = Se !== ie;
          me(Se), nt && (H == null || H(Se));
        }
        var ht = { id: mt, activeKey: ie, animated: Q, tabPosition: _e, rtl: G, mobile: ae },
          pt,
          Lt = (0, M.Z)(
            (0, M.Z)({}, ht),
            {},
            {
              editable: R,
              locale: E,
              moreIcon: C,
              moreTransitionName: A,
              tabBarGutter: B,
              onTabClick: $e,
              onTabScroll: z,
              extra: L,
              style: U,
              panes: d,
            },
          );
        return (
          _ ? (pt = _(Lt, kr)) : (pt = t.createElement(kr, Lt)),
          t.createElement(
            Er.Provider,
            { value: { tabs: Z, prefixCls: l } },
            t.createElement(
              'div',
              (0, K.Z)(
                {
                  ref: n,
                  id: i,
                  className: W()(
                    l,
                    ''.concat(l, '-').concat(_e),
                    ((r = {}),
                    (0, I.Z)(r, ''.concat(l, '-mobile'), ae),
                    (0, I.Z)(r, ''.concat(l, '-editable'), R),
                    (0, I.Z)(r, ''.concat(l, '-rtl'), G),
                    r),
                    s,
                  ),
                },
                J,
              ),
              pt,
              t.createElement(ca, (0, K.Z)({ destroyInactiveTabPane: O }, ht, { animated: Q })),
            ),
          )
        );
      }
      var _r = t.forwardRef(va);
      _r.TabPane = Lr;
      var ma = _r,
        ha = ma,
        pa = m(91442),
        ga = m(60615),
        ba = m(15711),
        ya = m(3194),
        Sa = m(83334),
        Ca = m(80258),
        Pa = function (e, n) {
          var r = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (r[i] = e[i]);
          if (e != null && typeof Object.getOwnPropertySymbols == 'function')
            for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++)
              n.indexOf(i[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[a]) &&
                (r[i[a]] = e[i[a]]);
          return r;
        };
      function Kr(e) {
        var n = e.type,
          r = e.className,
          i = e.size,
          a = e.onEdit,
          l = e.hideAdd,
          s = e.centered,
          d = e.addIcon,
          c = Pa(e, ['type', 'className', 'size', 'onEdit', 'hideAdd', 'centered', 'addIcon']),
          v = c.prefixCls,
          g = c.moreIcon,
          R = g === void 0 ? t.createElement(pa.Z, null) : g,
          y = t.useContext(Sa.E_),
          F = y.getPrefixCls,
          S = y.direction,
          P = F('tabs', v),
          B;
        n === 'editable-card' &&
          (B = {
            onEdit: function (E, C) {
              var A = C.key,
                O = C.event;
              a == null || a(E === 'add' ? O : A, E);
            },
            removeIcon: t.createElement(ba.Z, null),
            addIcon: d || t.createElement(ga.Z, null),
            showAdd: l !== !0,
          });
        var U = F();
        return (
          (0, ya.Z)(
            !('onPrevClick' in c) && !('onNextClick' in c),
            'Tabs',
            '`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.',
          ),
          t.createElement(Ca.Z.Consumer, null, function (L) {
            var E,
              C = i !== void 0 ? i : L;
            return t.createElement(
              ha,
              (0, K.Z)({ direction: S, moreTransitionName: ''.concat(U, '-slide-up') }, c, {
                className: W()(
                  ((E = {}),
                  (0, I.Z)(E, ''.concat(P, '-').concat(C), C),
                  (0, I.Z)(E, ''.concat(P, '-card'), ['card', 'editable-card'].includes(n)),
                  (0, I.Z)(E, ''.concat(P, '-editable-card'), n === 'editable-card'),
                  (0, I.Z)(E, ''.concat(P, '-centered'), s),
                  E),
                  r,
                ),
                editable: B,
                moreIcon: R,
                prefixCls: P,
              }),
            );
          })
        );
      }
      Kr.TabPane = Lr;
      var xa = Kr;
    },
    28579: function (Wt, ke, m) {
      'use strict';
      var K = m(9233),
        I = m.n(K),
        t = m(60485),
        b = m.n(t);
    },
    38299: function (Wt, ke, m) {
      'use strict';
      m.d(ke, {
        J$: function () {
          return Vn;
        },
        ZP: function () {
          return Ye;
        },
        kY: function () {
          return Pn;
        },
      });
      var K = m(59301);
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function I(
        o,
        x,
        u,
        p,
      ) {
        function h(f) {
          return f instanceof u
            ? f
            : new u(function (w) {
                w(f);
              });
        }
        return new (u || (u = Promise))(function (f, w) {
          function V(X) {
            try {
              D(p.next(X));
            } catch (ve) {
              w(ve);
            }
          }
          function le(X) {
            try {
              D(p.throw(X));
            } catch (ve) {
              w(ve);
            }
          }
          function D(X) {
            X.done ? f(X.value) : h(X.value).then(V, le);
          }
          D((p = p.apply(o, x || [])).next());
        });
      }
      function t(o, x) {
        var u = {
            label: 0,
            sent: function () {
              if (f[0] & 1) throw f[1];
              return f[1];
            },
            trys: [],
            ops: [],
          },
          p,
          h,
          f,
          w;
        return (
          (w = { next: V(0), throw: V(1), return: V(2) }),
          typeof Symbol == 'function' &&
            (w[Symbol.iterator] = function () {
              return this;
            }),
          w
        );
        function V(D) {
          return function (X) {
            return le([D, X]);
          };
        }
        function le(D) {
          if (p) throw new TypeError('Generator is already executing.');
          for (; u; )
            try {
              if (
                ((p = 1),
                h &&
                  (f =
                    D[0] & 2
                      ? h.return
                      : D[0]
                      ? h.throw || ((f = h.return) && f.call(h), 0)
                      : h.next) &&
                  !(f = f.call(h, D[1])).done)
              )
                return f;
              switch (((h = 0), f && (D = [D[0] & 2, f.value]), D[0])) {
                case 0:
                case 1:
                  f = D;
                  break;
                case 4:
                  return u.label++, { value: D[1], done: !1 };
                case 5:
                  u.label++, (h = D[1]), (D = [0]);
                  continue;
                case 7:
                  (D = u.ops.pop()), u.trys.pop();
                  continue;
                default:
                  if (
                    ((f = u.trys),
                    !(f = f.length > 0 && f[f.length - 1]) && (D[0] === 6 || D[0] === 2))
                  ) {
                    u = 0;
                    continue;
                  }
                  if (D[0] === 3 && (!f || (D[1] > f[0] && D[1] < f[3]))) {
                    u.label = D[1];
                    break;
                  }
                  if (D[0] === 6 && u.label < f[1]) {
                    (u.label = f[1]), (f = D);
                    break;
                  }
                  if (f && u.label < f[2]) {
                    (u.label = f[2]), u.ops.push(D);
                    break;
                  }
                  f[2] && u.ops.pop(), u.trys.pop();
                  continue;
              }
              D = x.call(o, u);
            } catch (X) {
              (D = [6, X]), (h = 0);
            } finally {
              p = f = 0;
            }
          if (D[0] & 5) throw D[1];
          return { value: D[0] ? D[1] : void 0, done: !0 };
        }
      }
      var b = function () {},
        N = b(),
        q = Object,
        M = function (o) {
          return o === N;
        },
        Ee = function (o) {
          return typeof o == 'function';
        },
        W = function (o, x) {
          return q.assign({}, o, x);
        },
        he = 'undefined',
        pe = function () {
          return typeof window != he;
        },
        Pe = function () {
          return typeof document != he;
        },
        Re = new WeakMap(),
        Ie = 0,
        De = function (o) {
          var x = typeof o,
            u = o && o.constructor,
            p = u == Date,
            h,
            f;
          if (q(o) === o && !p && u != RegExp) {
            if (((h = Re.get(o)), h)) return h;
            if (((h = ++Ie + '~'), Re.set(o, h), u == Array)) {
              for (h = '@', f = 0; f < o.length; f++) h += De(o[f]) + ',';
              Re.set(o, h);
            }
            if (u == q) {
              h = '#';
              for (var w = q.keys(o).sort(); !M((f = w.pop())); )
                M(o[f]) || (h += f + ':' + De(o[f]) + ',');
              Re.set(o, h);
            }
          } else
            h = p
              ? o.toJSON()
              : x == 'symbol'
              ? o.toString()
              : x == 'string'
              ? JSON.stringify(o)
              : '' + o;
          return h;
        },
        Xe = !0,
        at = function () {
          return Xe;
        },
        re = pe(),
        je = Pe(),
        it = re && window.addEventListener ? window.addEventListener.bind(window) : b,
        lt = je ? document.addEventListener.bind(document) : b,
        He = re && window.removeEventListener ? window.removeEventListener.bind(window) : b,
        Zt = je ? document.removeEventListener.bind(document) : b,
        Bt = function () {
          var o = je && document.visibilityState;
          return M(o) ? !0 : o !== 'hidden';
        },
        Ut = function (o) {
          return (
            lt('visibilitychange', o),
            it('focus', o),
            function () {
              Zt('visibilitychange', o), He('focus', o);
            }
          );
        },
        Jt = function (o) {
          var x = function () {
              (Xe = !0), o();
            },
            u = function () {
              Xe = !1;
            };
          return (
            it('online', x),
            it('offline', u),
            function () {
              He('online', x), He('offline', u);
            }
          );
        },
        ge = { isOnline: at, isVisible: Bt },
        ot = { initFocus: Ut, initReconnect: Jt },
        St = !pe() || 'Deno' in window,
        ce = function (o) {
          return pe() ? window.requestAnimationFrame(o) : setTimeout(o, 1);
        },
        Qe = St ? K.useEffect : K.useLayoutEffect,
        st = typeof navigator != 'undefined' && navigator.connection,
        Ge = !St && st && (['slow-2g', '2g'].includes(st.effectiveType) || st.saveData),
        Xt = function (o) {
          if (Ee(o))
            try {
              o = o();
            } catch (h) {
              o = '';
            }
          var x = [].concat(o);
          o = typeof o == 'string' ? o : (Array.isArray(o) ? o.length : o) ? De(o) : '';
          var u = o ? '$err$' + o : '',
            p = o ? '$req$' + o : '';
          return [o, x, u, p];
        },
        ut = new WeakMap(),
        Le = 0,
        yn = 1,
        Ct = 2,
        wt = function (o, x, u, p, h, f) {
          for (
            var w = ut.get(o),
              V = w[0],
              le = w[1],
              D = w[4],
              X = w[5],
              ve = V[x],
              Ue = le[x] || [],
              Me = 0;
            Me < Ue.length;
            ++Me
          )
            Ue[Me](u, p, h);
          return f && (delete D[x], delete X[x], ve && ve[0])
            ? ve[0](Ct).then(function () {
                return o.get(x);
              })
            : o.get(x);
        },
        Wn = 0,
        Pt = function () {
          return ++Wn;
        },
        Qt = function () {
          for (var o = [], x = 0; x < arguments.length; x++) o[x] = arguments[x];
          return I(void 0, void 0, void 0, function () {
            var u, p, h, f, w, V, le, D, X, ve, Ue, Me, an, ln;
            return t(this, function (ct) {
              switch (ct.label) {
                case 0:
                  if (
                    ((u = o[0]),
                    (p = o[1]),
                    (h = o[3] !== !1),
                    (f = o[2]),
                    (w = Xt(p)),
                    (V = w[0]),
                    (le = w[2]),
                    !V)
                  )
                    return [2];
                  if (((D = ut.get(u)), (X = D[2]), (ve = D[3]), o.length < 3))
                    return [2, wt(u, V, u.get(V), u.get(le), N, h)];
                  if (((an = X[V] = Pt()), (ve[V] = 0), Ee(f)))
                    try {
                      f = f(u.get(V));
                    } catch (dt) {
                      Me = dt;
                    }
                  return f && Ee(f.then)
                    ? [
                        4,
                        f.catch(function (dt) {
                          Me = dt;
                        }),
                      ]
                    : [3, 2];
                case 1:
                  if (((Ue = ct.sent()), an !== X[V])) {
                    if (Me) throw Me;
                    return [2, Ue];
                  }
                  return [3, 3];
                case 2:
                  (Ue = f), (ct.label = 3);
                case 3:
                  return (
                    Me || u.set(V, Ue), u.set(le, Me), (ve[V] = Pt()), [4, wt(u, V, Ue, Me, N, h)]
                  );
                case 4:
                  if (((ln = ct.sent()), Me)) throw Me;
                  return [2, ln];
              }
            });
          });
        },
        qt = function (o, x) {
          for (var u in o) o[u][0] && o[u][0](x);
        },
        Sn = function (o, x) {
          if (!ut.has(o)) {
            var u = W(ot, x),
              p = {},
              h = Qt.bind(N, o),
              f = b;
            if ((ut.set(o, [p, {}, {}, {}, {}, {}, h]), !St)) {
              var w = u.initFocus(qt.bind(N, p, Le)),
                V = u.initReconnect(qt.bind(N, p, yn));
              f = function () {
                w && w(), V && V(), ut.delete(o);
              };
            }
            return [o, h, f];
          }
          return [o, ut.get(o)[6]];
        },
        Cn = function (o, x, u, p, h) {
          if (!!ge.isVisible()) {
            var f = u.errorRetryCount,
              w = h.retryCount,
              V = ~~((Math.random() + 0.5) * (1 << (w < 8 ? w : 8))) * u.errorRetryInterval;
            (!M(f) && w > f) || setTimeout(p, V, h);
          }
        },
        Dt = Sn(new Map()),
        en = Dt[0],
        xt = Dt[1],
        tn = W(
          {
            onLoadingSlow: b,
            onSuccess: b,
            onError: b,
            onErrorRetry: Cn,
            onDiscarded: b,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: Ge ? 1e4 : 5e3,
            focusThrottleInterval: 5 * 1e3,
            dedupingInterval: 2 * 1e3,
            loadingTimeout: Ge ? 5e3 : 3e3,
            compare: function (o, x) {
              return De(o) == De(x);
            },
            isPaused: function () {
              return !1;
            },
            cache: en,
            mutate: xt,
            fallback: {},
          },
          ge,
        ),
        nn = function (o, x) {
          var u = W(o, x);
          if (x) {
            var p = o.use,
              h = o.fallback,
              f = x.use,
              w = x.fallback;
            p && f && (u.use = p.concat(f)), h && w && (u.fallback = W(h, w));
          }
          return u;
        },
        $t = (0, K.createContext)({}),
        Nt = function (o) {
          var x = o.value,
            u = nn((0, K.useContext)($t), x),
            p = x && x.provider,
            h = (0, K.useState)(function () {
              return p ? Sn(p(u.cache || en), x) : N;
            })[0];
          return (
            h && ((u.cache = h[0]), (u.mutate = h[1])),
            Qe(function () {
              return h ? h[2] : N;
            }, []),
            (0, K.createElement)($t.Provider, W(o, { value: u }))
          );
        },
        Bn = function (o, x) {
          var u = (0, K.useState)({})[1],
            p = (0, K.useRef)(o),
            h = (0, K.useRef)({ data: !1, error: !1, isValidating: !1 }),
            f = (0, K.useCallback)(function (w) {
              var V = !1,
                le = p.current;
              for (var D in w) {
                var X = D;
                le[X] !== w[X] && ((le[X] = w[X]), h.current[X] && (V = !0));
              }
              V && !x.current && u({});
            }, []);
          return (
            Qe(function () {
              p.current = o;
            }),
            [p, h.current, f]
          );
        },
        Et = function (o) {
          return Ee(o[1])
            ? [o[0], o[1], o[2] || {}]
            : [o[0], null, (o[1] === null ? o[2] : o[1]) || {}];
        },
        Pn = function () {
          return W(tn, (0, K.useContext)($t));
        },
        Un = function (o) {
          return function () {
            for (var x = [], u = 0; u < arguments.length; u++) x[u] = arguments[u];
            var p = Pn(),
              h = Et(x),
              f = h[0],
              w = h[1],
              V = h[2],
              le = nn(p, V),
              D = o,
              X = le.use;
            if (X) for (var ve = X.length; ve-- > 0; ) D = X[ve](D);
            return D(f, w || le.fetcher, le);
          };
        },
        xn = function (o, x, u) {
          var p = x[o] || (x[o] = []);
          return (
            p.push(u),
            function () {
              var h = p.indexOf(u);
              h >= 0 && ((p[h] = p[p.length - 1]), p.pop());
            }
          );
        },
        rn = { dedupe: !0 },
        $n = function (o, x, u) {
          var p = u.cache,
            h = u.compare,
            f = u.fallbackData,
            w = u.suspense,
            V = u.revalidateOnMount,
            le = u.refreshInterval,
            D = u.refreshWhenHidden,
            X = u.refreshWhenOffline,
            ve = ut.get(p),
            Ue = ve[0],
            Me = ve[1],
            an = ve[2],
            ln = ve[3],
            ct = ve[4],
            dt = ve[5],
            on = Xt(o),
            j = on[0],
            zn = on[1],
            sn = on[2],
            un = on[3],
            Ot = (0, K.useRef)(!1),
            Rt = (0, K.useRef)(!1),
            Rn = (0, K.useRef)(j),
            Vt = (0, K.useRef)(u),
            be = function () {
              return Vt.current;
            },
            jn = p.get(j),
            xr = M(f) ? u.fallback[j] : f,
            Tt = M(jn) ? xr : jn,
            cn = p.get(sn),
            Hn = function () {
              return M(V) ? (be().isPaused() ? !1 : w ? !M(Tt) : M(Tt) || u.revalidateIfStale) : V;
            },
            ur = function () {
              return !j || !x ? !1 : p.get(un) ? !0 : !Ot.current && Hn();
            },
            Gn = ur(),
            Yn = Bn({ data: Tt, error: cn, isValidating: Gn }, Rt),
            zt = Yn[0],
            Jn = Yn[1],
            Tn = Yn[2],
            ft = (0, K.useCallback)(
              function (vt) {
                return I(void 0, void 0, void 0, function () {
                  var Fe, qe, jt, Ht, Oe, et, dn, Ae, It, kt;
                  return t(this, function (fn) {
                    switch (fn.label) {
                      case 0:
                        if (!j || !x || Rt.current || be().isPaused()) return [2, !1];
                        (jt = !0),
                          (Ht = vt || {}),
                          (Oe = M(ct[j]) || !Ht.dedupe),
                          (et = function () {
                            return !Rt.current && j === Rn.current && Ot.current;
                          }),
                          (dn = function () {
                            dt[j] === qe && (delete ct[j], delete dt[j]);
                          }),
                          (Ae = { isValidating: !1 }),
                          (It = function () {
                            p.set(un, !1), et() && Tn(Ae);
                          }),
                          p.set(un, !0),
                          Tn({ isValidating: !0 }),
                          (fn.label = 1);
                      case 1:
                        return (
                          fn.trys.push([1, 3, , 4]),
                          Oe &&
                            (wt(p, j, zt.current.data, zt.current.error, !0),
                            u.loadingTimeout &&
                              !p.get(j) &&
                              setTimeout(function () {
                                jt && et() && be().onLoadingSlow(j, u);
                              }, u.loadingTimeout),
                            (dt[j] = Pt()),
                            (ct[j] = x.apply(void 0, zn))),
                          (qe = dt[j]),
                          [4, ct[j]]
                        );
                      case 2:
                        return (
                          (Fe = fn.sent()),
                          Oe && setTimeout(dn, u.dedupingInterval),
                          dt[j] !== qe
                            ? (Oe && et() && be().onDiscarded(j), [2, !1])
                            : (p.set(sn, N),
                              (Ae.error = N),
                              !M(an[j]) && (qe <= an[j] || qe <= ln[j] || ln[j] === 0)
                                ? (It(), Oe && et() && be().onDiscarded(j), [2, !1])
                                : (h(zt.current.data, Fe) || (Ae.data = Fe),
                                  h(p.get(j), Fe) || p.set(j, Fe),
                                  Oe && et() && be().onSuccess(Fe, j, u),
                                  [3, 4]))
                        );
                      case 3:
                        return (
                          (kt = fn.sent()),
                          dn(),
                          be().isPaused() ||
                            (p.set(sn, kt),
                            (Ae.error = kt),
                            Oe &&
                              et() &&
                              (be().onError(kt, j, u),
                              u.shouldRetryOnError &&
                                be().onErrorRetry(kt, j, u, ft, {
                                  retryCount: (Ht.retryCount || 0) + 1,
                                  dedupe: !0,
                                }))),
                          [3, 4]
                        );
                      case 4:
                        return (
                          (jt = !1), It(), et() && Oe && wt(p, j, Ae.data, Ae.error, !1), [2, !0]
                        );
                    }
                  });
                });
              },
              [j],
            ),
            cr = (0, K.useCallback)(
              Qt.bind(N, p, function () {
                return Rn.current;
              }),
              [],
            );
          if (
            (Qe(function () {
              Vt.current = u;
            }),
            Qe(
              function () {
                if (!!j) {
                  var vt = Ot.current,
                    Fe = ft.bind(N, rn),
                    qe = function () {
                      return be().isVisible() && be().isOnline();
                    },
                    jt = function (Ae, It, kt) {
                      Tn(
                        W(
                          { error: It, isValidating: kt },
                          h(zt.current.data, Ae) ? N : { data: Ae },
                        ),
                      );
                    },
                    Ht = 0,
                    Oe = function (Ae) {
                      if (Ae == Le) {
                        var It = Date.now();
                        be().revalidateOnFocus &&
                          It > Ht &&
                          qe() &&
                          ((Ht = It + be().focusThrottleInterval), Fe());
                      } else if (Ae == yn) be().revalidateOnReconnect && qe() && Fe();
                      else if (Ae == Ct) return ft();
                    },
                    et = xn(j, Me, jt),
                    dn = xn(j, Ue, Oe);
                  return (
                    (Rt.current = !1),
                    (Rn.current = j),
                    (Ot.current = !0),
                    vt && Tn({ data: Tt, error: cn, isValidating: Gn }),
                    Hn() && (M(Tt) || St ? Fe() : ce(Fe)),
                    function () {
                      (Rt.current = !0), et(), dn();
                    }
                  );
                }
              },
              [j, ft],
            ),
            Qe(
              function () {
                var vt;
                function Fe() {
                  le && vt !== -1 && (vt = setTimeout(qe, le));
                }
                function qe() {
                  !zt.current.error && (D || be().isVisible()) && (X || be().isOnline())
                    ? ft(rn).then(Fe)
                    : Fe();
                }
                return (
                  Fe(),
                  function () {
                    vt && (clearTimeout(vt), (vt = -1));
                  }
                );
              },
              [le, D, X, ft],
            ),
            (0, K.useDebugValue)(Tt),
            w && M(Tt))
          )
            throw M(cn) ? ft(rn) : cn;
          return {
            mutate: cr,
            get data() {
              return (Jn.data = !0), Tt;
            },
            get error() {
              return (Jn.error = !0), cn;
            },
            get isValidating() {
              return (Jn.isValidating = !0), Gn;
            },
          };
        },
        Vn = q.defineProperty(Nt, 'default', { value: tn }),
        En = function (o) {
          return Xt(o)[0];
        },
        Ye = Un($n);
    },
  },
]);