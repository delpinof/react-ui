export function getWeeks(pastWeeks) {
  let data;
  const req = new XMLHttpRequest();
  req.responseType = "json";
  req.open(
    "GET",
    "https://fherdelpino.appspot.com/expense/week?" +
      new URLSearchParams({
        pastWeeks: pastWeeks,
      })
  );
  req.onload = function (e) {
    console.log("onload");
    if (this.status === 200) {
      data = this.response; // JSON response
      console.log("resopnse", this.response);
    } else {
      console.log("error");
    }
  };
  return data;
}

export function getExpenses(from, to) {
  let data;
  const req = new XMLHttpRequest();
  req.responseType = "json";
  req.open(
    "GET",
    "https://fherdelpino.appspot.com/expense?" +
      new URLSearchParams({
        from: from,
        to: to,
      })
  );
  req.onload = function (e) {
    if (this.status === 200) {
      data = this.response; // JSON response
    }
  };
  return data;
}

export const weeksList = [
  {
    year: 2023,
    week: 13,
    from: "2023-03-27",
    to: "2023-04-02",
  },
  {
    year: 2023,
    week: 12,
    from: "2023-03-20",
    to: "2023-03-26",
  },
  {
    year: 2023,
    week: 11,
    from: "2023-03-13",
    to: "2023-03-19",
  },
  {
    year: 2023,
    week: 10,
    from: "2023-03-06",
    to: "2023-03-12",
  },
  {
    year: 2023,
    week: 9,
    from: "2023-02-27",
    to: "2023-03-05",
  },
  {
    year: 2023,
    week: 8,
    from: "2023-02-20",
    to: "2023-02-26",
  },
];

export const expensesList = [
  [
    {
      id: "6412e5a37d20535fb631dba3",
      name: "Elizabeth",
      amount: 80.0,
      date: "2023-03-16",
      description: "test1",
    },
    {
      id: "6412f31198865c085666ba35",
      name: "Elizabeth",
      amount: 234.0,
      date: "2023-03-16",
      description: "test",
    },
    {
      id: "6412f3fa98865c085666ba36",
      name: "Elizabeth",
      amount: 67.0,
      date: "2023-03-01",
      description: "desc1",
    },
    {
      id: "6412f55e98865c085666ba37",
      name: "Elizabeth",
      amount: 85.0,
      date: "2023-03-16",
      description: "test from lap",
    },
    {
      id: "6413aeadcb3f8e67ce636aea",
      name: "Elizabeth",
      amount: 45.0,
      date: "2023-03-17",
      description: "test3",
    },
    {
      id: "6413aee0cb3f8e67ce636aeb",
      name: "Elizabeth",
      amount: 85.0,
      date: "2023-03-17",
      description: "desc",
    },
    {
      id: "6413d34c41ce860bf0f12d1b",
      name: "Mochecito",
      amount: 1.0,
      date: "2023-03-18",
      description: "Ropita para mochecita mjm me llevas de la manita",
    },
    {
      id: "6415714fe9b7ec0d93e9fa1a",
      name: "Elizabeth",
      amount: 44.23,
      date: "2023-03-14",
      description: "Uber eats",
    },
    {
      id: "64157171e9b7ec0d93e9fa1b",
      name: "Elizabeth",
      amount: 9.16,
      date: "2023-03-14",
      description: "Boost",
    },
    {
      id: "6415719dc436b23834ab4606",
      name: "Elizabeth",
      amount: 4.2,
      date: "2023-03-18",
      description: "Saporo",
    },
    {
      id: "641571c0c436b23834ab4607",
      name: "Elizabeth",
      amount: 16.0,
      date: "2023-03-15",
      description: "Frencheese",
    },
    {
      id: "641571d6c436b23834ab4608",
      name: "Elizabeth",
      amount: 14.9,
      date: "2023-03-18",
      description: "Saporo",
    },
    {
      id: "641571fcc436b23834ab4609",
      name: "Elizabeth",
      amount: 55.99,
      date: "2023-03-18",
      description: "Uber eats",
    },
    {
      id: "6415721ac436b23834ab460a",
      name: "Elizabeth",
      amount: 7.9,
      date: "2023-03-16",
      description: "Indian store",
    },
    {
      id: "64157243c436b23834ab460b",
      name: "Elizabeth",
      amount: 14.9,
      date: "2023-03-17",
      description: "Saporo",
    },
    {
      id: "6415724dc436b23834ab460c",
      name: "Elizabeth",
      amount: 4.2,
      date: "2023-03-18",
      description: "Saporo ",
    },
    {
      id: "641577ed65e0c938954a5bdf",
      name: "Elizabeth",
      amount: 43.89,
      date: "2023-03-18",
      description: "Uber eats pizza",
    },
    {
      id: "6418eff2829c224d6537d589",
      name: "Fernando",
      amount: 26.07,
      date: "2023-03-20",
      description: "schnitz",
    },
    {
      id: "6418fcce086f8c13930ec56d",
      name: "Elizabeth",
      amount: 17.9,
      date: "2023-03-20",
      description: "Puzzle ",
    },
    {
      id: "6418fcea086f8c13930ec56e",
      name: "Elizabeth",
      amount: 24.6,
      date: "2023-03-21",
      description: "Saporo",
    },
    {
      id: "641933ca13ea8e6fb194e70c",
      name: "Fernando",
      amount: 23.16,
      date: "2023-03-21",
      description: "skewer’s ",
    },
    {
      id: "641a43caf89da73c959572cf",
      name: "Elizabeth",
      amount: 4.2,
      date: "2023-03-22",
      description: "Saporo",
    },
    {
      id: "641a4417f89da73c959572d0",
      name: "Elizabeth",
      amount: 18.0,
      date: "2023-03-21",
      description: "Hsp",
    },
    {
      id: "641bb8d493f9d349b5a668a1",
      name: "Fernando",
      amount: 16.0,
      date: "2023-03-22",
      description: "penang road",
    },
    {
      id: "641becd74fa3315a28e2fd80",
      name: "Elizabeth",
      amount: 40.33,
      date: "2023-02-16",
      description: "schmucks",
    },
    {
      id: "641c165685cc6c071b5ebfd6",
      name: "Fernando",
      amount: 22.29,
      date: "2023-03-23",
      description: "doordash dodee paidang",
    },
  ],
];
