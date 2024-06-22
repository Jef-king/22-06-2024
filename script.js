// Fetch menu items from the provided JSON file
async function getMenu() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json');
    const menuItems = await response.json();
    // Display menu items to the user (you can customize this part)
    console.log('Menu Items:', menuItems);
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
}

// Take an order (resolve after 2.5 seconds)
function takeOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Randomly choose 3 burgers (you can customize this logic)
      const order = {
        burger1: 'Veg Burger',
        burger2: 'Chicken Burger',
        burger3: 'Cheese Burger',
      };
      resolve(order);
    }, 2500);
  });
}

// Order preparation (resolve after 1.5 seconds)
function orderPrep() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: false });
    }, 1500);
  });
}

// Payment (resolve after 1 second)
function payOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ order_status: true, paid: true });
    }, 1000);
  });
}

// Thank you message
function thankyouFnc() {
  console.log('Thank you for eating with us today!');
}

// Main function to handle promises sequentially
async function main() {
  try {
    await getMenu();
    const order = await takeOrder();
    console.log('Order:', order);
    const prepStatus = await orderPrep();
    console.log('Order Preparation:', prepStatus);
    const paymentStatus = await payOrder();
    console.log('Payment:', paymentStatus);
    if (paymentStatus.paid) {
      thankyouFnc();
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the main function
main();
