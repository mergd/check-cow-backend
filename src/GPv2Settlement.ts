import { ponder } from "@/generated";

ponder.on("GPv2Settlement:Trade", async ({ event, context }) => {
  // console.log("GPv2Settlement:Trade", event);
const order = context.entities.OrderSettled;
const id = event.params.orderUid.toString() + event.block.timestamp.toString();
await order.create({
id: id,
data:{
  account: event.params.owner,
  txHash: event.transaction.hash,
  orderUUID: event.params.orderUid,
  sellToken: event.params.sellToken,
  buyToken: event.params.buyToken,
  sellAmount: event.params.sellAmount,
  buyAmount: event.params.buyAmount,
  executionPrice: event.params.buyAmount / event.params.sellAmount,
  date: event.block.timestamp.toString(),

}

})

});

