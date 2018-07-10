const coupon = 'pizza25';

function validCoupon(coupon: string): string  {
    return coupon.toUpperCase();
}

console.log(`Coupon is ${validCoupon(coupon)}`);