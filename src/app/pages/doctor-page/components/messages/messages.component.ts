import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.less'
})
export class MessagesComponentDoctor {
  searchQuery: string = '';
  newMessage: string = '';

  // Mock data
  contacts = [
    { id: 1, name: 'John Doe', lastMessage: 'See you soon!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'Thanks, doctor!' },
    { id: 3, name: 'Alex Green', lastMessage: 'Can I reschedule?' }
  ];

  selectedChat: any = null;

  messages = [
    { sent: true, text: 'Hello!', timestamp: '9:00 AM' },
    { sent: false, text: 'Hi there!', timestamp: '9:01 AM' },
    { sent: true, text: 'How are you feeling today?', timestamp: '9:02 AM' }
  ];

  mediaItems = [
    { name: 'Prescription.pdf', date: 'Apr 1, 2025' },
    { name: 'X-ray Image', date: 'Mar 28, 2025' },
    { name: 'Blood Test Result', date: 'Mar 25, 2025' }
  ];

  // Method to filter contacts based on search
  filteredContacts() {
    if (!this.searchQuery.trim()) return this.contacts;
    return this.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  // Select a conversation
  selectChat(contact: any) {
    this.selectedChat = {
      name: contact.name,
      members: [contact.name, 'You'] // Mock members
    };
    // Load real messages per chat if backend is integrated
  }

  // Create a new conversation
  createConversation() {
    const newContact = {
      id: Date.now(),
      name: `New Contact ${this.contacts.length + 1}`,
      lastMessage: ''
    };
    this.contacts.unshift(newContact);
    this.selectChat(newContact);
  }

  // Send a message
  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      sent: true,
      text: this.newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    this.newMessage = '';
  }

  // Trigger file input
  triggerFileUpload() {
    const input = document.getElementById('fileUpload') as HTMLInputElement;
    input?.click();
  }

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
      // You can push this to mediaItems if you want to show it in UI
    }
  }
}
