# como-berlin.de

In diesem Repository liegt der Quellcode der COMo-Website[^como-note]. Wir verwenden [Jekyll](https://jekyllrb.com/) als _Static Site Generator_.

Der Inhalt der Website ist lizenziert unter einer
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  Creative Commons Namensnennung - Weitergabe unter gleichen Bedingungen 4.0 International Lizenz
</a>.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img alt="Creative Commons Lizenzvertrag" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
</a>

## How To Development

Install dependencies:
```sh
  $ gem install jekyll bundler
  $ bundle install
```

Deploy locally: `jekyll serve --livereload`

Server will listen on `http://127.0.0.1:4000`

## Inhalte

Die einzelnen Seiten der Website werden aus Markdown-Dateien im obersten Verzeichnis des Repositorys generiert. Lediglich dieses `README.md` ist in der [Jekyll-Konfigarionsdatei](_config.yml) explizit ausgeschlossen. Jekyll verwendet [kramdown](https://kramdown.gettalong.org/) und unterstützt dementsprechend dessen [erweiterte Syntax](https://kramdown.gettalong.org/syntax.html).

Daten für die Navigation und ähnliches werden in [YAML](https://yaml.org/)-Dateien im [\_data-Verzeichnis](_data/) gepflegt.

## Layout

Jede Seite sollte im [_Front Matter_](https://jekyllrb.com/docs/front-matter/) das zu verwendende Layout angeben, z. B.:

```
layout: page
```

Die verschiedenen Layouts liegen im [\_layouts-Verzeichnis](_layouts/). Das Standard-Layout ist `page`, das Kerngerüst ist in `default.html` definiert.

Das derzeitige Design verwendet [Bootstrap](https://getbootstrap.com/). Die [SASS (bzw.  SCSS)](https://sass-lang.com/)-Dateien dazu liegen im [\_sass-Verzeichnis](_sass) und werden in [main.scss](css/main.scss) eingebunden.

[^como-note]: The Clair Platform and the Clair-Berlin initiative are now part of the [CO2-Monitoring (COMo) project](https://www.technologiestiftung-berlin.de/projekte/como-berlin), funded by a grant from the [Senate Chancellery of the Governing Mayor of Berlin](https://www.berlin.de/rbmskzl/en/).
