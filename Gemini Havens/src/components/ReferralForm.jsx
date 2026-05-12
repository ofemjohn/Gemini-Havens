import { useState } from 'react'
import {
  ArrowRight,
  ArrowLeft,
  Building2,
  Scale,
  Users,
  Handshake,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
} from 'lucide-react'

const referralTypes = [
  {
    value: 'Hospital / Detox',
    icon: Building2,
    description: 'Discharge planning or step-down placement',
  },
  {
    value: 'Court / Case Manager',
    icon: Scale,
    description: 'Court-ordered or case-managed referral',
  },
  {
    value: 'Resident / Family',
    icon: Users,
    description: 'Self-referral or family member inquiry',
  },
  {
    value: 'Community Partner',
    icon: Handshake,
    description: 'Outpatient provider or community org',
  },
]

const initialState = {
  name: '',
  organization: '',
  phone: '',
  email: '',
  role: '',
  urgency: 'Standard',
  notes: '',
}

// ──────────────────────────────────────────────
// 🔑 Replace with your real Web3Forms access key
//    Get yours free at https://web3forms.com
// ──────────────────────────────────────────────
const WEB3FORMS_KEY = '2a42bd1a-dca9-4d58-ac1e-a7c8c2aeabeb'

function ReferralForm() {
  const [formData, setFormData] = useState(initialState)
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState('') // '' | 'submitting' | 'submitted' | 'error'

  function updateField(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function selectRole(value) {
    setFormData((current) => ({ ...current, role: value }))
  }

  function nextStep() {
    setStep((s) => Math.min(s + 1, 3))
  }

  function prevStep() {
    setStep((s) => Math.max(s - 1, 1))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Referral — ${formData.role} — ${formData.urgency} urgency`,
          from_name: 'Gemini Havens Sober Living',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          referral_type: formData.role,
          urgency: formData.urgency,
          placement_notes: formData.notes || '(none provided)',
        }),
      })

      const result = await response.json()
      if (result.success) {
        setStatus('submitted')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'submitted') {
    return (
      <div className="rf-success">
        <div className="rf-success-icon">
          <CheckCircle2 size={48} />
        </div>
        <h3>Referral received!</h3>
        <p>
          Thank you for reaching out. Our intake team will respond within
          one business hour during operating hours.
        </p>
        <div className="rf-success-details">
          <div className="rf-success-row">
            <Phone size={16} />
            <span>Need immediate help? Call <strong>404-692-7070</strong></span>
          </div>
          <div className="rf-success-row">
            <Mail size={16} />
            <span>Or email <strong>intake@geminihavens.com</strong></span>
          </div>
        </div>
        <button
          type="button"
          className="button button-secondary"
          onClick={() => {
            setFormData(initialState)
            setStep(1)
            setStatus('')
          }}
        >
          Submit another referral
        </button>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="rf-success">
        <div className="rf-success-icon rf-error-icon">
          <Mail size={48} />
        </div>
        <h3>Something went wrong</h3>
        <p>
          We could not send your referral at this time. Please try again or
          contact us directly.
        </p>
        <div className="rf-success-details">
          <div className="rf-success-row">
            <Phone size={16} />
            <span>Call us at <strong>404-692-7070</strong></span>
          </div>
          <div className="rf-success-row">
            <Mail size={16} />
            <span>Email <strong>intake@geminihavens.com</strong></span>
          </div>
        </div>
        <button
          type="button"
          className="button button-primary"
          onClick={() => setStatus('')}
        >
          Try again
        </button>
      </div>
    )
  }

  return (
    <form className="rf-container" onSubmit={handleSubmit}>
      {/* Progress bar */}
      <div className="rf-progress">
        {[1, 2, 3].map((s) => (
          <div key={s} className="rf-progress-step">
            <div
              className={`rf-progress-dot ${s <= step ? 'rf-active' : ''} ${s < step ? 'rf-done' : ''}`}
            >
              {s < step ? <CheckCircle2 size={14} /> : s}
            </div>
            <span className={s <= step ? 'rf-active' : ''}>
              {s === 1 ? 'Referral type' : s === 2 ? 'Your details' : 'Placement info'}
            </span>
          </div>
        ))}
        <div className="rf-progress-bar">
          <div
            className="rf-progress-fill"
            style={{ width: `${((step - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Referral type selector */}
      {step === 1 && (
        <div className="rf-step">
          <div className="rf-step-header">
            <h3>Who are you referring from?</h3>
            <p>Select the option that best describes your organization or relationship.</p>
          </div>
          <div className="rf-type-grid">
            {referralTypes.map(({ value, icon: Icon, description }) => (
              <button
                key={value}
                type="button"
                className={`rf-type-card ${formData.role === value ? 'rf-selected' : ''}`}
                onClick={() => selectRole(value)}
              >
                <div className="rf-type-icon">
                  <Icon size={22} />
                </div>
                <strong>{value}</strong>
                <span>{description}</span>
                {formData.role === value && (
                  <div className="rf-check">
                    <CheckCircle2 size={18} />
                  </div>
                )}
              </button>
            ))}
          </div>
          <div className="rf-actions">
            <div />
            <button
              type="button"
              className="button button-primary"
              disabled={!formData.role}
              onClick={nextStep}
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Contact details */}
      {step === 2 && (
        <div className="rf-step">
          <div className="rf-step-header">
            <h3>Your contact information</h3>
            <p>Help us reach you quickly for placement coordination.</p>
          </div>
          <div className="rf-fields">
            <label className="rf-label">
              <span>Full name *</span>
              <input
                name="name"
                value={formData.name}
                onChange={updateField}
                placeholder="Jane Smith"
                required
              />
            </label>
            <label className="rf-label">
              <span>Organization</span>
              <input
                name="organization"
                value={formData.organization}
                onChange={updateField}
                placeholder="Hospital, court, case management office..."
              />
            </label>
            <label className="rf-label">
              <span>Phone number *</span>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={updateField}
                placeholder="(404) 555-0123"
                required
              />
            </label>
            <label className="rf-label">
              <span>Email address *</span>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={updateField}
                placeholder="name@organization.com"
                required
              />
            </label>
          </div>
          <div className="rf-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={prevStep}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button
              type="button"
              className="button button-primary"
              disabled={!formData.name || !formData.email || !formData.phone}
              onClick={nextStep}
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Placement info */}
      {step === 3 && (
        <div className="rf-step">
          <div className="rf-step-header">
            <h3>Placement details</h3>
            <p>Any additional information helps us respond faster.</p>
          </div>
          <div className="rf-fields">
            <div className="rf-urgency-group">
              <span className="rf-urgency-label">How urgent is this placement?</span>
              <div className="rf-urgency-options">
                {['Immediate', 'Within 48 hours', 'Standard'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    className={`rf-urgency-btn ${formData.urgency === opt ? 'rf-selected' : ''}`}
                    onClick={() =>
                      setFormData((c) => ({ ...c, urgency: opt }))
                    }
                  >
                    {opt === 'Immediate' && <Clock size={14} />}
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <label className="rf-label rf-full">
              <span>Additional notes</span>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={updateField}
                placeholder="Share current level of care, any specific needs, or details that help our intake team respond quickly."
                rows="5"
              />
            </label>
          </div>
          <div className="rf-actions">
            <button
              type="button"
              className="button button-secondary"
              onClick={prevStep}
            >
              <ArrowLeft size={18} />
              Back
            </button>
            <button
              type="submit"
              className="button button-primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Submit referral'}
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </form>
  )
}

export default ReferralForm
