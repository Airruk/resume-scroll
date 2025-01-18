'use client'

import React from 'react'
import { ModalProps } from '@/types/components'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  Button,
  Input,
  Textarea,
} from '@/lib/components'
import { useToast } from '@/components/ui/use-toast'

export function ContactModal({ open, onOpenChange }: ModalProps) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [sending, setSending] = React.useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      toast({
        id: 'contact-form-success',
        title: 'Message sent!',
        description: 'Thank you for your message. I will get back to you soon.',
      })

      // Reset form
      setName('')
      setEmail('')
      setMessage('')
      onOpenChange?.(false)
    } catch (err) {
      toast({
        id: 'contact-form-error',
        title: 'Error sending message',
        description: err instanceof Error ? err.message : 'Please try again later',
        variant: 'destructive',
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Contact Me</DialogTitle>
          <DialogDescription>
            Send me a message and I&apos;ll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
