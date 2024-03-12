export class DemoService {
  async sayHello(): Promise<{ message: string }> {
    // Sleep for 1 second to simulate a slow response
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { message: 'Hello from the server!' }
  }
}
