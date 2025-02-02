# Testkonzept
Nach IEEE 829

### Introduction 
Eine plattformübergreifende Anwendung zum erstellen von Einkaufslisten, die eine Echtzeitsynchronisation ermöglicht, ohne dass die lokale Funktionalität verloren geht.

### Test Items
Getestet werden alle Funktionen die zu den Server Endpoints gehören und die Funktionen zur Erstellung der Liste(n).

### Features to be tested
#### Documents
- ShoppingListsStore.tsx
- ShoppingListStore.tsx
- ListCreationContext.tsx

#### Functions
- useAddShoppingListCallback()
- useJoinShoppingListCallback()
- useDelShoppingListCallback()
- useShoppingListIds()
- ( ShoppingListsStore() )

- useAddShoppingListProductCallback()
- useDelShoppingListProductCallback()
- useShoppingListValue()
- useShoppingListProductIds()
- useShoppingListProductCount()
- useShoppingListProductCell()
- useShoppingListProductCreatedByNickname()
- useShoppingListUserNicknames()
- ( ShoppingListStore() )

- ListCreationProvider()
- useListCreation()

### Features not to be tested
- Frontend
- Non-Functional Tests (Performance)

### Approach / Vorgehen
In unseren Team arbeiten wir mt Test Suiten und einzelnen Testfällen (Unit Tests)
Die Komponententests führen wir durch Unit Tests aus. Wir verwenden kein Test Driven Development, denn unser Projekt wurde vor den Tests erstellt. Wir teilen die Arbeit auf, indem jeder an einer anderen Testsuite arbeitet.

### Item pass / fail criteria
- Erfolgreiche Tests sollen erfolgreich durchgeführt werden mit dem erwarteten Testergebnis.
- Tests schlagen fehl, wenn Sie unterbrochen werden und es eine Error Message gibt.

### Testumgebung
- Wir verwenden VSCode als Entwicklerumgebung und als Terminal
- Dann benutzen wir die Testing library "React" und Jest '@testing-library/jest-dom';
- Unsere Tests werden bei jeder Änderung am Code automatisch ausgeführt durch den Befehl npm test
