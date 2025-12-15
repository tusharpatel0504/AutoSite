"use client";

import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../components/ui/form";
import { Send, User, Mail, Linkedin, Globe, Phone, Play } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "../lib/use-toast";
import { useForm } from "react-hook-form";

interface DemoFormData {
  fullName: string;
  email: string;
  linkedinProfile: string;
  companyWebsite: string;
  phoneNumber: string;
  additionalMessage: string;
}

const Demo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const form = useForm<DemoFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      linkedinProfile: "",
      companyWebsite: "",
      phoneNumber: "",
      additionalMessage: "",
    },
  });

  const handleSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);

    // TODO: Replace this URL with your Google Apps Script Web App URL
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby8mDYxlT2luKM1GRImvKIchPw4ybB4R-TL90v748iOT84599H9HW_jT3pvAJiOiQ4C/exec";

    try {
      const formDataToSend = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      formDataToSend.append("timestamp", new Date().toISOString());
      formDataToSend.append("formType", "demo-request");

      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors",
      });

      toast({
        variant: "success",
        title: "Demo Request Sent!",
        description: "We'll send you personalized demo access within 24 hours.",
      });

      form.reset();
    } catch (error: unknown) {
      let errorMsg = "Something went wrong. Please try again.";
      if (error instanceof Error) {
        errorMsg = error.message;
      }
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: errorMsg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden bg-black">
      {/* Background Decorations - White theme like Contact */}
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="absolute top-20 left-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-12 mt-16">
          <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full text-white text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            Request Demo
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Request{" "}
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Demo Access
            </span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Fill out the form below and we'll send you personalized demo access within 24 hours
          </p>
        </div>

        {/* Form Card */}
        <Card className="border-gray-700 bg-gray-950/90 backdrop-blur-sm hover:bg-gray-950 transition-all duration-300">
          <CardContent className="p-6 sm:p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="fullName"
                  rules={{ required: "Full name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="fullName" className="text-sm font-medium text-white flex items-center gap-2">
                        <User className="w-4 h-4 text-white" />
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="fullName"
                          autoComplete="name"
                          placeholder="John Doe"
                          className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Address */}
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
                      <FormLabel htmlFor="email" className="text-sm font-medium text-white flex items-center gap-2">
                        <Mail className="w-4 h-4 text-white" />
                        Email Address *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          autoComplete="email"
                          placeholder="founder@company.com"
                          className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* LinkedIn Profile */}
                <FormField
                  control={form.control}
                  name="linkedinProfile"
                  rules={{
                    // required: "LinkedIn profile is required",
                    pattern: {
                      value: /^https?:\/\/(www\.)?linkedin\.com\/.+$/i,
                      message: "Please enter a valid LinkedIn URL",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="linkedinProfile" className="text-sm font-medium text-white flex items-center gap-2">
                        <Linkedin className="w-4 h-4 text-white" />
                        LinkedIn Profile URL 
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="linkedinProfile"
                          type="url"
                          placeholder="https://linkedin.com/in/yourprofile"
                          className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Company Website */}
                <FormField
                  control={form.control}
                  name="companyWebsite"
                  rules={{
                    required: "Company website is required",
                    pattern: {
                      value: /^https?:\/\/.+\..+$/i,
                      message: "Please enter a valid website URL",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="companyWebsite" className="text-sm font-medium text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-white" />
                        Company Website URL *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="companyWebsite"
                          type="url"
                          placeholder="https://yourcompany.com"
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
                  rules={{
                    required: "Phone number is required",
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                      message: "Please enter a valid phone number",
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="phoneNumber" className="text-sm font-medium text-white flex items-center gap-2">
                        <Phone className="w-4 h-4 text-white" />
                        Mobile Number *
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="phoneNumber"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+91 6393828666"
                          className="border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Additional Message */}
                <FormField
                  control={form.control}
                  name="additionalMessage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="additionalMessage" className="text-sm font-medium text-white">
                        Additional Message (Optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="additionalMessage"
                          autoComplete="off"
                          placeholder="Tell us about your specific requirements or questions..."
                          className="min-h-32 border-gray-700 bg-black text-white placeholder:text-gray-500 focus:border-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-white text-black text-lg py-6 hover:bg-gray-200 transition"
                >
                  <Send className="mr-2 w-5 h-5 text-black" />
                  {isSubmitting ? "Sending..." : "Request Demo"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Demo;
