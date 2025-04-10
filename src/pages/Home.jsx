import React from "react";
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, ListTodo, PlusCircle, Star, Users } from "lucide-react"
import { Button } from "./components/UI/Button.jsx";
function Home({isLoggedIn}) {
    return (
       <div className="pt-[60px]">
       
          <div className="flex min-h-[100dvh] flex-col">
           
            <main className="flex-1">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                  <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                          Manage your tasks with ease
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                          Stay organized, focused, and in control of your day with our intuitive task management solution.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button asChild size="lg"
                        className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-6 py-3 
                        rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                        >
                         {isLoggedIn ? <Link to="/dashboard">Get Started</Link> :  <Link to="/register">Register</Link> }
                        </Button>
                        <Button variant="outline" size="lg">
                          <Link href="/demo">View Demo</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="mx-auto aspect-video w-full h-[400px] max-w-[600px] overflow-hidden rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 object-cover shadow-xl ">
                      <div className="flex h-full items-center justify-center">
                        <div className="w-full max-w-sm rounded-lg border bg-background p-4 shadow-lg">
                          <div className="mb-4 flex items-center justify-between">
                            <h3 className="font-semibold">Today's Tasks</h3>
                            <PlusCircle className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-center gap-2 rounded-md border bg-muted/40 px-3 py-2">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="line-through opacity-70">Morning standup meeting</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                              <div className="h-5 w-5 rounded-full border-2" />
                              <span>Finish project proposal</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                              <div className="h-5 w-5 rounded-full border-2" />
                              <span>Review client feedback</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-md border px-3 py-2">
                              <div className="h-5 w-5 rounded-full border-2" />
                              <span>Prepare presentation slides</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                        Features
                      </div>
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Everything you need to stay productive
                      </h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our task manager comes with all the tools you need to organize your work and personal life.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
                    <div className="grid gap-4 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <ListTodo className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Task Organization</h3>
                      <p className="text-muted-foreground">
                        Create, organize, and prioritize tasks with ease. Group related tasks into projects and categories.
                      </p>
                    </div>
                    <div className="grid gap-4 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Clock className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Reminders & Deadlines</h3>
                      <p className="text-muted-foreground">
                        Never miss a deadline with customizable reminders and notifications for upcoming tasks.
                      </p>
                    </div>
                    <div className="grid gap-4 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">Team Collaboration</h3>
                      <p className="text-muted-foreground">
                        Share tasks and projects with team members, assign responsibilities, and track progress together.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                        Loved by productivity enthusiasts
                      </h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        See what our users have to say about how TaskMaster has transformed their workflow.
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
                    <div className="rounded-lg border bg-background p-6 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <h4 className="font-semibold">Sarah Johnson</h4>
                          <p className="text-sm text-muted-foreground">Marketing Manager</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mt-3 text-muted-foreground">
                        "TaskMaster has completely transformed how our marketing team collaborates. We can now easily track
                        campaign tasks and deadlines in one place."
                      </p>
                    </div>
                    <div className="rounded-lg border bg-background p-6 shadow-sm">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <h4 className="font-semibold">Michael Chen</h4>
                          <p className="text-sm text-muted-foreground">Freelance Developer</p>
                        </div>
                      </div>
                      <div className="mt-4 flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="mt-3 text-muted-foreground">
                        "As a freelancer juggling multiple projects, TaskMaster helps me stay organized and never miss client
                        deadlines. The interface is intuitive and powerful."
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, transparent pricing</h2>
                      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Choose the plan that's right for you or your team
                      </p>
                    </div>
                  </div>
                  <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    <div className="rounded-lg border bg-background p-6 shadow-sm">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Free</h3>
                        <p className="text-sm text-muted-foreground">For individuals getting started</p>
                        <div className="mt-4 text-3xl font-bold">$0</div>
                        <p className="text-sm text-muted-foreground">Forever free</p>
                      </div>
                      <ul className="mb-6 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Up to 10 tasks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Basic reminders</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Mobile app access</span>
                        </li>
                      </ul>
                      <Button className="w-full" variant="outline">
                        Get Started
                      </Button>
                    </div>
                    <div className="rounded-lg border bg-background p-6 shadow-sm ring-2 ring-primary">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Pro</h3>
                        <p className="text-sm text-muted-foreground">For power users</p>
                        <div className="mt-4 text-3xl font-bold">$9.99</div>
                        <p className="text-sm text-muted-foreground">per month</p>
                      </div>
                      <ul className="mb-6 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Unlimited tasks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Advanced reminders</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Recurring tasks</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Priority support</span>
                        </li>
                      </ul>
                      <Button className="w-full">Get Started</Button>
                    </div>
                    <div className="rounded-lg border bg-background p-6 shadow-sm">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold">Team</h3>
                        <p className="text-sm text-muted-foreground">For teams of all sizes</p>
                        <div className="mt-4 text-3xl font-bold">$19.99</div>
                        <p className="text-sm text-muted-foreground">per user/month</p>
                      </div>
                      <ul className="mb-6 space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Everything in Pro</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Team collaboration</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Admin controls</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>Advanced analytics</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          <span>24/7 priority support</span>
                        </li>
                      </ul>
                      <Button className="w-full" variant="outline">
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                      Ready to boost your productivity?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Join thousands of users who have transformed how they manage tasks and projects.
                    </p>
                  </div>
                  <div className="mx-auto flex flex-col gap-2 min-[400px]:flex-row">
                    <Button asChild size="lg">
                      <Link href="/signup">Get Started for Free</Link>
                    </Button>
                    <Button variant="outline" size="lg">
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
              </section>
            </main>
            <footer className="border-t bg-muted">
              <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
                <div className="flex items-center gap-2 font-bold">
                  <ListTodo className="h-6 w-6" />
                  <span>TaskMaster</span>
                </div>
                <nav className="flex gap-4 sm:gap-6">
                  <Link href="#" className="text-sm font-medium hover:underline">
                    Terms
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline">
                    Privacy
                  </Link>
                  <Link href="#" className="text-sm font-medium hover:underline">
                    Contact
                  </Link>
                </nav>
                <div className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} TaskMaster. All rights reserved.
                </div>
              </div>
            </footer>
          </div>
          </div>
        )
      }
      
    
  
  
  
  export default Home;