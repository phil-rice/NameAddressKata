# CUT3

### Dupa implementarea NameForm cu SimpleFields

Observam ca odata cu introducerea genRender si renderInput,
codul nostru devin mult mai data driven. Insa, putem observa ca inca avem multe linii ce pot fi puse in alta parte
in NameForm.

Ce vrem este sa avem un customHook care primeste doar our formData si setFormData iar acel
customHook sa ne returneze componentele noastre. Odata returnate, aceste trb doar puse de catre noi in Form.

Idee este ca acel hook se va ocupa de:
- definirea met handleChanges
- parsarea propriu-zisa a proprietatiilor.
