const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R ${Object.values(order.address)[0]}, Nº: ${Object.values(order.address)[1]}, AP: ${Object.values(order.address)[2]}.`
}
customerInfo(order);


const orderModifier = (order) => {
  let price1 = Object.values(order.order.pizza.marguerita)[1];
  let price2 = Object.values(order.order.pizza.pepperoni)[1];
  let priceCoke = Object.values(order.order.drinks.coke)[1];
  let priceDelivery = Object.values(order.order.delivery)[1];
  let discount = 10;
  console.log (`Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]} e ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é R$ ${price1 + price2 + priceCoke + priceDelivery - discount}.`);
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]} e ${Object.keys(order.order.pizza)[1]} e ${Object.values(order.order.drinks.coke)[0]} é R$ ${price1 + price2 + priceCoke + priceDelivery - discount}.`
}

order.name = 'Luiz Silva';

orderModifier(order);