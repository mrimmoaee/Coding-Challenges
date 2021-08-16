# Pointer vs Reference

## Pointer

- It can be initialized to any value.

- It can be initialized any time after its declaration.

- It can be assigned to point to a NULL value.

- It can be dereferenced using the ‘\*’ operator.

- It can be changed to point to a different variable of the same type only.

```
int val = 5;
//code//
int *p = &val;
```

## Reference

- It has to be initialized when it is declared.

- It can’t be a NULL value.

* It can be used by a name.

* Once it has been initialized to a variable, it can’t be changed to refer to a variable object.

```
int val = 52;
int &ref = val;
```
