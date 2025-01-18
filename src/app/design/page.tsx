'use client';

import React from 'react';
import { 
  AtomIcon, 
  BuildingIcon, 
  CalendarIcon, 
  CircuitBoardIcon,
  ComponentIcon,
  LayoutTemplateIcon,
  MapPinIcon, 
  PuzzleIcon,
  UsersIcon 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Timeline from '@/components/organisms/timeline';
import { ContactModal } from '@/components/organisms/contact-modal';
import { Badge } from '@/components/atoms/badge';
import { Input } from '@/components/atoms/input';
import { Label } from '@/components/atoms/label';
import { Textarea } from '@/components/atoms/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function DesignPage() {
  const [contactOpen, setContactOpen] = React.useState(false);
  
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8">
        <div className="flex items-center gap-3 mb-8">
          <CircuitBoardIcon className="h-8 w-8" />
          <h1 className="text-4xl font-bold">Design System</h1>
        </div>

        <p className="text-muted-foreground mb-8">
          This design system follows atomic design principles, organizing components from basic building blocks (atoms) 
          to complex page layouts (templates).
        </p>
        
        <Tabs defaultValue="atoms" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="atoms" className="flex items-center gap-2">
              <AtomIcon className="h-4 w-4" />
              Atoms
            </TabsTrigger>
            <TabsTrigger value="molecules" className="flex items-center gap-2">
              <PuzzleIcon className="h-4 w-4" />
              Molecules
            </TabsTrigger>
            <TabsTrigger value="organisms" className="flex items-center gap-2">
              <ComponentIcon className="h-4 w-4" />
              Organisms
            </TabsTrigger>
            <TabsTrigger value="templates" className="flex items-center gap-2">
              <LayoutTemplateIcon className="h-4 w-4" />
              Templates
            </TabsTrigger>
          </TabsList>

          {/* Atoms Tab */}
          <TabsContent value="atoms" className="space-y-8">
            <div className="grid gap-8">
              <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
                <AtomIcon className="h-6 w-6" />
                <h2>Atoms</h2>
              </div>
              <p className="text-muted-foreground">
                The basic building blocks of the interface. These are the smallest, indivisible components.
              </p>

              {/* Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle>Buttons</CardTitle>
                  <CardDescription>Basic button variants for different contexts</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Button>Default Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card>
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                  <CardDescription>Small status indicators and labels</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Badge>Default Badge</Badge>
                  <Badge variant="secondary">Secondary Badge</Badge>
                  <Badge variant="outline">Outline Badge</Badge>
                  <Badge variant="destructive">Destructive Badge</Badge>
                </CardContent>
              </Card>

              {/* Form Inputs */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Inputs</CardTitle>
                  <CardDescription>Basic form input elements</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 max-w-sm">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" />
                  </div>
                </CardContent>
              </Card>

              {/* Icons */}
              <Card>
                <CardHeader>
                  <CardTitle>Icons</CardTitle>
                  <CardDescription>Common interface icons</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <BuildingIcon className="h-6 w-6" />
                  <CalendarIcon className="h-6 w-6" />
                  <MapPinIcon className="h-6 w-6" />
                  <UsersIcon className="h-6 w-6" />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Molecules Tab */}
          <TabsContent value="molecules" className="space-y-8">
            <div className="grid gap-8">
              <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
                <PuzzleIcon className="h-6 w-6" />
                <h2>Molecules</h2>
              </div>
              <p className="text-muted-foreground">
                Combinations of atoms that form relatively simple UI components.
              </p>

              {/* Cards */}
              <Card>
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                  <CardDescription>Containers for related content</CardDescription>
                </CardHeader>
                <CardContent>
                  <Card className="max-w-md">
                    <CardHeader>
                      <CardTitle>Example Card</CardTitle>
                      <CardDescription>This is a sample card component</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Cards can contain various types of content and are used to group related information.</p>
                    </CardContent>
                    <CardFooter>
                      <Button>Action</Button>
                    </CardFooter>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Organisms Tab */}
          <TabsContent value="organisms" className="space-y-8">
            <div className="grid gap-8">
              <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
                <ComponentIcon className="h-6 w-6" />
                <h2>Organisms</h2>
              </div>
              <p className="text-muted-foreground">
                Complex UI components composed of molecules and/or atoms.
              </p>

              {/* Timeline */}
              <Card>
                <CardHeader>
                  <CardTitle>Timeline</CardTitle>
                  <CardDescription>Interactive timeline component for displaying chronological events</CardDescription>
                </CardHeader>
                <CardContent>
                  <Timeline />
                </CardContent>
              </Card>

              {/* Contact Modal */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Modal</CardTitle>
                  <CardDescription>Modal dialog for contact form</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={() => setContactOpen(true)}>Open Contact Modal</Button>
                  <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Templates Tab */}
          <TabsContent value="templates" className="space-y-8">
            <div className="grid gap-8">
              <div className="flex items-center gap-2 text-2xl font-semibold text-primary">
                <LayoutTemplateIcon className="h-6 w-6" />
                <h2>Templates</h2>
              </div>
              <p className="text-muted-foreground">
                Page-level layouts that define the structure of different views in the application.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle>Available Templates</CardTitle>
                  <CardDescription>Main layout templates used across the application</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Timeline Page Layout - Main view for displaying the timeline</li>
                    <li>About Page Layout - Layout for the about section</li>
                    <li>Design System Layout - This current layout</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
