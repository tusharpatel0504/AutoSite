"use client";

import { Button } from "../components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Mail, Phone, MessageSquare, Calendar, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "../components/hooks/use-toast";
import { useForm } from "react-hook-form";

declare global {
  interface Window {
    Calendly: any;
  }
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzVIWqt2fBViiwaMdjhgO3MMs2IL7Ka9JFkUYjdhytzzDGTIxnbZYLylLU8DRmeI4mKCw/exec";

    try {
      const formDataToSend = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append("timestamp", new Date().toISOString());

      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      toast({
        title: "Success!",
        description: "Your message has been sent successfully.",
      });

      form.reset();
    } catch (error: unknown) {
      let errorMsg = "Something went wrong. Please try again.";
      if (error instanceof Error) {
        errorMsg = error.message;
        console.error("Form error:", error.message);
      } else {
        console.error("Form error:", error);
      }
      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4= relative overflow-hidden mt-20">
      {/* Black & White Theme Decorations */}
      <div className="absolute inset-0  pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-white text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies already using our AI solutions. Get started with a free consultation and see the difference automation can make.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-gray-700 bg-gray-950/90 backdrop-blur-sm hover:bg-gray-950 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-3xl text-white flex items-center">
                  <Send className="mr-3 w-8 h-8 text-white" />
                  Get Started Today
                </CardTitle>
                <p className="text-gray-400 text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <FormField
                        control={form.control}
                        name="firstName"
                        rules={{ required: "First name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="firstName" className="text-sm font-medium text-white">First Name</FormLabel>
                            <FormControl>
                              <Input
                                id="firstName"
                                autoComplete="given-name"
                                placeholder="John"
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      {/* Last Name */}
                      <FormField
                        control={form.control}
                        name="lastName"
                        rules={{ required: "Last name is required" }}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel htmlFor="lastName" className="text-sm font-medium text-white">Last Name</FormLabel>
                            <FormControl>
                              <Input
                                id="lastName"
                                autoComplete="family-name"
                                placeholder="Doe"
                                className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email" className="text-sm font-medium text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              autoComplete="email"
                              type="email"
                              placeholder="john@company.com"
                              className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone Number */}
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="phoneNumber" className="text-sm font-medium text-white">Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              id="phoneNumber"
                              autoComplete="tel"
                              placeholder="+1 123 456 7890"
                              className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      rules={{ required: "Message is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message" className="text-sm font-medium text-white">Project Details</FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              autoComplete="off"
                              placeholder="Tell us about your project and goals..."
                              className="min-h-32 border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white text-black text-lg py-4 hover:bg-gray-200 transition"
                    >
                      <Send className="mr-2 w-5 h-5 text-black" />
                      {isSubmitting ? "Sending..." : "Start Your AI Journey"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Cards */}
          <div className="space-y-6">
            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300 group">
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <Mail className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Email Us</h3>
                  <p className="text-gray-300 mb-1">ritik.autosite@gmail.com</p>
                  <p className="text-gray-500 text-sm">We respond within 1 hours</p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300 group">
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <Phone className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Call Us</h3>
                  <p className="text-gray-300 mb-1">+91 6393828666</p>
                  <p className="text-gray-500 text-sm">Mon–Sat, 9AM–10PM IST</p>
                </div>
              </CardContent>
            </Card>

            <Card
              className="cursor-pointer border-gray-700 bg-black hover:bg-gray-900 transition-all duration-300 group"
              onClick={() => {
                window.Calendly?.initPopupWidget?.({ url: 'https://calendly.com/guptaritik67856/30min' });
              }}
            >
              <CardContent className="p-6 flex items-start">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mr-4">
                  <Calendar className="w-7 h-7 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">Book free appointment</h3>
                  <p className="text-black hover:underline text-sm">Book your free 30 min consultation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;