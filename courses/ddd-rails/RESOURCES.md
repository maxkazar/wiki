# DDD для модулей в Rails — Resources

## Knowledge

- [Серия: DDD in Ruby on Rails — Visuality (blog)](https://www.visuality.pl/posts/aggregate-ddd-in-ruby-on-rails)
  Практичная серия именно про DDD в Rails: агрегаты, репозитории, value objects на PORO поверх ActiveRecord. **Use for:** как лечь tactical-паттерны на Rails без тяжёлых инструментов — главный источник под нашу миссию.
- [Repository — DDD in Ruby on Rails — Visuality](https://www.visuality.pl/posts/repository-ddd-in-ruby-on-rails)
  Repository-паттерн поверх ActiveRecord, плюсы/минусы. **Use for:** когда прятать AR за абстракцией, а когда нет.
- [DDD for Rails Developers — SitePoint (Part 1–3)](https://www.sitepoint.com/ddd-for-rails-developers-part-3-aggregates/)
  Entities, Value Objects, Aggregates на языке Rails-разработчика. **Use for:** базовая терминология DDD, переведённая на Rails.
- [Active Record, nice and blended — 37signals/Dev (DHH-команда)](https://dev.37signals.com/active-record-nice-and-blended/)
  Контр-перспектива: почему 37signals НЕ выносят логику в сервис-объекты, а «обогащают» AR. **Use for:** калибровка — когда DDD-слой оверинжиниринг; обязательно к прочтению для «командного стандарта».
- [Enforcing Modularity in Rails Apps with Packwerk — Shopify Engineering](https://shopify.engineering/enforcing-modularity-rails-apps-packwerk)
  Как Shopify проводил границы по DDD в монолите. **Use for:** контекст про bounded contexts в большом Rails-монолите (out of scope сейчас, но полезно для «куда это масштабируется»).
- [A Packwerk Retrospective — Shopify Engineering](https://shopify.engineering/a-packwerk-retrospective)
  Честная ретроспектива: где DDD-границы НЕ совпали с реальностью кода. **Use for:** прививка от догматизма — границы проверяются работающим кодом, а не идеалом.
- [GitHub: kgrzybek/modular-monolith-with-ddd](https://github.com/kgrzybek/modular-monolith-with-ddd)
  Эталонный модульный монолит с DDD (C#, но архитектурно образцовый). **Use for:** референс структуры слоёв и агрегатов; читать как архитектуру, не как код.

- [Bounded Context — Martin Fowler](https://martinfowler.com/bliki/BoundedContext.html)
  Канон стратегического DDD: почему единая модель не масштабируется, язык задаёт границы. **Use for:** где провести границу модуля (Лессон 05).
- [Domain-driven Monolith — Reevoo Engineering](https://medium.com/reevoo-engineering/domain-driven-monolith-35d902ee9f80)
  Контексты в Rails-монолите: общение событиями, «модуль не зовёт чужой код». **Use for:** как контексты общаются через границу (Лессон 05).
- [Anti-Corruption Layer Pattern — Microsoft Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer)
  Чёткий разбор ACL: проблема «разложения» домена, перевод, когда применять/нет, валидация на границе доверия. **Use for:** интеграция с внешними сканерами (Лессон 07).
- [Anti-Corruption Layer — DevIQ](https://deviq.com/domain-driven-design/anti-corruption-layer/)
  Трёхслойная структура Adapter/Translator/Facade. **Use for:** как разложить ACL на PORO (Лессон 07).

## Wisdom (Communities)

- [r/rails](https://reddit.com/r/rails) и [r/ruby](https://reddit.com/r/ruby)
  **Use for:** критика подхода к модульности, троллинг-проверка решений «сервис-объект vs толстая модель».
- [Ruby/Rails Discord, ruby.social (Mastodon)](https://ruby.social)
  **Use for:** живые мнения практиков по DDD-в-Rails, в т.ч. скептиков.

## Gaps
- Нет ещё проверенного русскоязычного источника — при необходимости найдём.
- Нужен пример из **нашего домена** (уточняется) — пока примеры адаптируем под него вручную.
