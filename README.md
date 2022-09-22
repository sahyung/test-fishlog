# Test Fishlog

- Mengerjakan service api dengan data `public/javascripts/sku.json`
- Service API bisa menggunakan bahasa pemrograman yang di kuasai  berserta library seperlunya
- Buat beberapa endpoint
  - Sort endpoint
    - Output yang di hasil di sort secara Descending bedasarkan Nama
  - Filter endpoint
    - Input bebas , menggunakan query string atau parameter
    - Output data yang di hasilkan adalah data yang mengandung kata dari parameter input

## Quickstart

```sh
npm install
npm start
```

### Tasks done

- Sort endpoint
url : http://localhost:3000/sort
method : GET
param :
  - `orderBy` string, optional, default `product__name`

- Filter endpoint
url : http://localhost:3000/filter
method : GET
param :
  - `filterBy` string, optional, default `product__name`
  - `search` string, optional, default `''`
