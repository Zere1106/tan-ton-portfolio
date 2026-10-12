import { profile } from '../data/profile';
export function XMarks({ className = '' }) { return <div className={`x-marks ${className}`} aria-hidden="true"><span>× × × × × ×</span><span>× × × × × ×</span></div>; }
export function SectionLabel({ number, children, right }) { return <div className="section-label"><span><i>{number}</i> {children}</span><span>{right || 'TAN TON / PORTFOLIO'}</span></div>; }
export function LinkButton({ url, children, primary = false, download, unavailable = 'Coming soon', className = '' }) {
  const classes = `button ${primary ? 'button-dark' : ''} ${className}`;
  return url ? <a className={classes} href={url} download={download || undefined} target={!download && /^https?:/.test(url) ? '_blank' : undefined} rel="noopener noreferrer">{children}</a> : <button className={classes} disabled title={unavailable}>{children}<span className="unavailable">{unavailable}</span></button>;
}
export function CvButton({ primary = false }) { return <LinkButton url={`/Tan-Ton-CV.pdf`} download primary={primary} unavailable="PDF soon"><span aria-hidden="true">↓</span> Download CV</LinkButton>; }
export function ContactLinks({ compact = false }) { return <div className={compact ? 'contact-mini' : 'contact-links'}>{profile.contacts.map(contact => contact.url ? <a key={contact.label} href={contact.url} target={contact.label === 'Email' ? undefined : '_blank'} rel="noopener noreferrer">{contact.label}{!compact && <span>{contact.value}</span>}</a> : <span key={contact.label} className="contact-pending">{contact.label}{!compact && <small>{contact.value}</small>}{compact && <sup title="Link coming soon">*</sup>}</span>)}</div>; }
