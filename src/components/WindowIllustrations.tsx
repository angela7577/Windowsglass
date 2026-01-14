export const WindowIllustrations = {
  sliding: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="slidingGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="slidingFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
      </defs>
      
      {/* Outer frame */}
      <rect x="20" y="25" width="260" height="150" fill="url(#slidingFrame)" rx="6"/>
      <rect x="28" y="33" width="244" height="134" fill="#f0f9ff" rx="4"/>
      
      {/* Left sliding panel */}
      <rect x="35" y="40" width="115" height="120" fill="url(#slidingGlass)" stroke="#3b82f6" strokeWidth="2.5" rx="2"/>
      <rect x="40" y="45" width="22" height="55" fill="#fff" opacity="0.3" rx="1"/>
      <rect x="40" y="105" width="30" height="20" fill="#fff" opacity="0.2" rx="1"/>
      
      {/* Right sliding panel */}
      <rect x="150" y="40" width="115" height="120" fill="url(#slidingGlass)" stroke="#3b82f6" strokeWidth="2.5" rx="2"/>
      <rect x="155" y="45" width="22" height="55" fill="#fff" opacity="0.3" rx="1"/>
      <rect x="230" y="105" width="30" height="20" fill="#fff" opacity="0.2" rx="1"/>
      
      {/* Center track */}
      <line x1="150" y1="40" x2="150" y2="160" stroke="#1e40af" strokeWidth="1.5" opacity="0.5"/>
      
      {/* Handles */}
      <rect x="140" y="95" width="6" height="20" fill="#1e3a8a" rx="1.5"/>
      <rect x="258" y="95" width="6" height="20" fill="#1e3a8a" rx="1.5"/>
      
      {/* Bottom track */}
      <rect x="28" y="165" width="244" height="7" fill="#94a3b8" rx="1.5"/>
      <rect x="32" y="167" width="236" height="3" fill="#cbd5e1" rx="0.5"/>
    </svg>
  ),

  casement: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="casementGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0e7ff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#a5b4fc" stopOpacity="0.7"/>
        </linearGradient>
        <linearGradient id="casementFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#818cf8"/>
          <stop offset="100%" stopColor="#6366f1"/>
        </linearGradient>
      </defs>
      
      {/* Main frame */}
      <rect x="30" y="25" width="240" height="150" fill="url(#casementFrame)" rx="6"/>
      <rect x="38" y="33" width="224" height="134" fill="#f5f3ff" rx="4"/>
      
      {/* Window sash */}
      <rect x="45" y="40" width="205" height="120" fill="url(#casementGlass)" stroke="#6366f1" strokeWidth="3" rx="2"/>
      
      {/* Glass reflections */}
      <rect x="52" y="47" width="30" height="60" fill="#fff" opacity="0.4" rx="1.5"/>
      <rect x="90" y="105" width="38" height="27" fill="#fff" opacity="0.25" rx="1.5"/>
      <rect x="190" y="55" width="22" height="40" fill="#fff" opacity="0.3" rx="1.5"/>
      
      {/* Hinges (left side) */}
      <rect x="43" y="70" width="5" height="15" fill="#4338ca" rx="1.5"/>
      <rect x="43" y="95" width="5" height="15" fill="#4338ca" rx="1.5"/>
      <rect x="43" y="120" width="5" height="15" fill="#4338ca" rx="1.5"/>
      
      {/* Handle (right side) */}
      <circle cx="240" cy="100" r="9" fill="#312e81"/>
      <rect x="231" y="96" width="19" height="8" fill="#312e81" rx="1.5"/>
      
      {/* Opening arc */}
      <path d="M 245 100 Q 275 80 280 65" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.4" strokeDasharray="4,3"/>
    </svg>
  ),

  bay: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="bayGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f3e8ff" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="bayFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#9333ea"/>
        </linearGradient>
      </defs>
      
      {/* Left angled panel */}
      <polygon points="25,42 90,27 90,163 25,148" fill="url(#bayFrame)"/>
      <polygon points="31,45 86,32 86,158 31,145" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="37" y="50" width="18" height="40" fill="#fff" opacity="0.3"/>
      
      {/* Center panel */}
      <rect x="90" y="23" width="120" height="145" fill="url(#bayFrame)" rx="4"/>
      <rect x="97" y="30" width="106" height="131" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="2.5" rx="2"/>
      <rect x="105" y="38" width="26" height="55" fill="#fff" opacity="0.4" rx="1.5"/>
      <rect x="165" y="95" width="30" height="34" fill="#fff" opacity="0.3" rx="1.5"/>
      
      {/* Right angled panel */}
      <polygon points="210,27 275,42 275,148 210,163" fill="url(#bayFrame)"/>
      <polygon points="214,32 270,45 270,145 214,158" fill="url(#bayGlass)" stroke="#7c3aed" strokeWidth="1.5"/>
      <rect x="232" y="52" width="18" height="40" fill="#fff" opacity="0.3"/>
      
      {/* Dividers */}
      <line x1="150" y1="30" x2="150" y2="161" stroke="#6b21a8" strokeWidth="1.5"/>
      <line x1="97" y1="95" x2="203" y2="95" stroke="#6b21a8" strokeWidth="1.5"/>
    </svg>
  ),

  tiltTurn: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="tiltGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="tiltFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="100%" stopColor="#d97706"/>
        </linearGradient>
      </defs>
      
      {/* Main frame */}
      <rect x="35" y="25" width="230" height="150" fill="url(#tiltFrame)" rx="6"/>
      <rect x="43" y="33" width="214" height="134" fill="#fffbeb" rx="4"/>
      
      {/* Window sash */}
      <rect x="50" y="40" width="200" height="120" fill="url(#tiltGlass)" stroke="#f59e0b" strokeWidth="3" rx="2"/>
      
      {/* Glass reflections */}
      <rect x="57" y="47" width="28" height="50" fill="#fff" opacity="0.35" rx="1.5"/>
      <rect x="150" y="90" width="35" height="30" fill="#fff" opacity="0.25" rx="1.5"/>
      
      {/* Tilt mechanism (top) */}
      <rect x="140" y="38" width="20" height="6" fill="#92400e" rx="2"/>
      <circle cx="150" cy="41" r="4" fill="#b45309"/>
      
      {/* Turn hinges (side) */}
      <rect x="48" y="75" width="5" height="12" fill="#92400e" rx="1"/>
      <rect x="48" y="110" width="5" height="12" fill="#92400e" rx="1"/>
      
      {/* Handle */}
      <rect x="235" y="95" width="8" height="25" fill="#78350f" rx="2"/>
      <circle cx="239" cy="107" r="5" fill="#92400e"/>
      
      {/* Tilt indicator line */}
      <path d="M 150 30 L 150 20 M 145 24 L 150 20 L 155 24" stroke="#f59e0b" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  ),

  doubleGlazed: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="doubleGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.95"/>
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.7"/>
        </linearGradient>
        <linearGradient id="doubleFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9"/>
          <stop offset="100%" stopColor="#0284c7"/>
        </linearGradient>
      </defs>
      
      {/* Main frame - thicker for double glazing */}
      <rect x="30" y="25" width="240" height="150" fill="url(#doubleFrame)" rx="6"/>
      <rect x="40" y="35" width="220" height="130" fill="#f0f9ff" rx="4"/>
      
      {/* Window with double pane effect */}
      <rect x="48" y="43" width="204" height="114" fill="url(#doubleGlass)" stroke="#0284c7" strokeWidth="3.5" rx="2"/>
      
      {/* Inner pane indication (shows double glazing) */}
      <rect x="52" y="47" width="196" height="106" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3,2" opacity="0.5" rx="1"/>
      
      {/* Glass reflections */}
      <rect x="58" y="53" width="32" height="45" fill="#fff" opacity="0.35" rx="2"/>
      <rect x="110" y="110" width="40" height="25" fill="#fff" opacity="0.25" rx="2"/>
      <rect x="200" y="60" width="25" height="35" fill="#fff" opacity="0.3" rx="2"/>
      
      {/* Center mullion */}
      <line x1="150" y1="43" x2="150" y2="157" stroke="#0369a1" strokeWidth="2"/>
      <rect x="147" y="95" width="6" height="15" fill="#075985" rx="1"/>
      
      {/* Double glazing spacer bars */}
      <rect x="44" y="97" width="212" height="3" fill="#cbd5e1" opacity="0.6"/>
      
      {/* Energy star indicator */}
      <circle cx="70" cy="70" r="12" fill="#10b981" opacity="0.2"/>
      <text x="70" y="75" fontSize="12" fontWeight="bold" fill="#059669" textAnchor="middle">E</text>
    </svg>
  ),

  msSteel: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="steelGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#94a3b8" stopOpacity="0.6"/>
        </linearGradient>
        <linearGradient id="steelFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#64748b"/>
          <stop offset="100%" stopColor="#475569"/>
        </linearGradient>
        <pattern id="metalTexture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#475569"/>
          <line x1="0" y1="0" x2="4" y2="4" stroke="#334155" strokeWidth="0.5"/>
        </pattern>
      </defs>
      
      {/* Heavy steel frame */}
      <rect x="25" y="20" width="250" height="160" fill="url(#steelFrame)" rx="3"/>
      <rect x="32" y="27" width="236" height="146" fill="url(#metalTexture)" opacity="0.3"/>
      <rect x="35" y="30" width="230" height="140" fill="#cbd5e1" rx="2"/>
      
      {/* Steel grid pattern */}
      <rect x="42" y="37" width="108" height="126" fill="url(#steelGlass)" stroke="#475569" strokeWidth="4" rx="1"/>
      <rect x="150" y="37" width="108" height="126" fill="url(#steelGlass)" stroke="#475569" strokeWidth="4" rx="1"/>
      
      {/* Glass reflections */}
      <rect x="50" y="45" width="25" height="50" fill="#fff" opacity="0.25" rx="1"/>
      <rect x="158" y="45" width="25" height="50" fill="#fff" opacity="0.25" rx="1"/>
      
      {/* Steel rivets/bolts */}
      <circle cx="40" cy="35" r="3" fill="#1e293b"/>
      <circle cx="260" cy="35" r="3" fill="#1e293b"/>
      <circle cx="40" cy="165" r="3" fill="#1e293b"/>
      <circle cx="260" cy="165" r="3" fill="#1e293b"/>
      
      {/* Horizontal bar */}
      <rect x="42" y="97" width="216" height="6" fill="#475569"/>
      <line x1="42" y1="100" x2="258" y2="100" stroke="#64748b" strokeWidth="1"/>
      
      {/* Vertical center bar */}
      <rect x="147" y="37" width="6" height="126" fill="#475569"/>
      <line x1="150" y1="37" x2="150" y2="163" stroke="#64748b" strokeWidth="1"/>
    </svg>
  ),

  industrial: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="indGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f1f5f9" stopOpacity="0.7"/>
          <stop offset="100%" stopColor="#cbd5e1" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="indFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
        <pattern id="industrialMesh" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <rect width="20" height="20" fill="none"/>
          <path d="M 0 10 L 20 10 M 10 0 L 10 20" stroke="#9ca3af" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
      </defs>
      
      {/* Heavy industrial frame */}
      <rect x="20" y="15" width="260" height="170" fill="url(#indFrame)" rx="2"/>
      <rect x="28" y="23" width="244" height="154" fill="#4b5563" rx="1"/>
      
      {/* Three-panel industrial grid */}
      <rect x="35" y="30" width="72" height="140" fill="url(#indGlass)" stroke="#1f2937" strokeWidth="5" rx="0.5"/>
      <rect x="107" y="30" width="72" height="140" fill="url(#indGlass)" stroke="#1f2937" strokeWidth="5" rx="0.5"/>
      <rect x="179" y="30" width="72" height="140" fill="url(#indGlass)" stroke="#1f2937" strokeWidth="5" rx="0.5"/>
      
      {/* Industrial mesh pattern overlay */}
      <rect x="35" y="30" width="216" height="140" fill="url(#industrialMesh)"/>
      
      {/* Minimal reflections */}
      <rect x="43" y="38" width="20" height="45" fill="#fff" opacity="0.2" rx="0.5"/>
      <rect x="115" y="38" width="20" height="45" fill="#fff" opacity="0.2" rx="0.5"/>
      <rect x="187" y="38" width="20" height="45" fill="#fff" opacity="0.2" rx="0.5"/>
      
      {/* Heavy-duty bolts */}
      <circle cx="35" cy="30" r="4" fill="#111827" stroke="#6b7280" strokeWidth="1"/>
      <circle cx="251" cy="30" r="4" fill="#111827" stroke="#6b7280" strokeWidth="1"/>
      <circle cx="35" cy="170" r="4" fill="#111827" stroke="#6b7280" strokeWidth="1"/>
      <circle cx="251" cy="170" r="4" fill="#111827" stroke="#6b7280" strokeWidth="1"/>
      
      {/* Horizontal support bars */}
      <rect x="35" y="65" width="216" height="4" fill="#1f2937"/>
      <rect x="35" y="130" width="216" height="4" fill="#1f2937"/>
      
      {/* Warning stripe */}
      <rect x="25" y="180" width="250" height="3" fill="#fbbf24" opacity="0.7"/>
      <rect x="25" y="180" width="10" height="3" fill="#1f2937"/>
      <rect x="45" y="180" width="10" height="3" fill="#1f2937"/>
      <rect x="65" y="180" width="10" height="3" fill="#1f2937"/>
    </svg>
  ),

  designer: (
    <svg viewBox="0 0 300 200" className="w-full h-full">
      <defs>
        <linearGradient id="designerGlass" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#fcd34d" stopOpacity="0.5"/>
        </linearGradient>
        <linearGradient id="designerFrame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#18181b"/>
          <stop offset="100%" stopColor="#09090b"/>
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b"/>
          <stop offset="50%" stopColor="#fbbf24"/>
          <stop offset="100%" stopColor="#f59e0b"/>
        </linearGradient>
      </defs>
      
      {/* Slim designer frame */}
      <rect x="35" y="25" width="230" height="150" fill="url(#designerFrame)" rx="8"/>
      <rect x="40" y="30" width="220" height="140" fill="#fefce8" rx="6"/>
      
      {/* Modern asymmetric grid */}
      <rect x="47" y="37" width="100" height="63" fill="url(#designerGlass)" stroke="#18181b" strokeWidth="2" rx="3"/>
      <rect x="147" y="37" width="100" height="63" fill="url(#designerGlass)" stroke="#18181b" strokeWidth="2" rx="3"/>
      <rect x="47" y="100" width="200" height="63" fill="url(#designerGlass)" stroke="#18181b" strokeWidth="2" rx="3"/>
      
      {/* Elegant reflections */}
      <rect x="54" y="44" width="28" height="40" fill="#fff" opacity="0.4" rx="2"/>
      <rect x="154" y="44" width="28" height="40" fill="#fff" opacity="0.4" rx="2"/>
      <rect x="60" y="110" width="35" height="35" fill="#fff" opacity="0.35" rx="2"/>
      
      {/* Gold accent strips */}
      <rect x="40" y="29" width="220" height="2" fill="url(#goldAccent)"/>
      <rect x="40" y="169" width="220" height="2" fill="url(#goldAccent)"/>
      
      {/* Minimalist handle */}
      <rect x="235" y="95" width="3" height="30" fill="#f59e0b" rx="1.5"/>
      <circle cx="236.5" cy="110" r="5" fill="#fbbf24" opacity="0.8"/>
      
      {/* Designer logo/mark */}
      <circle cx="70" cy="55" r="10" fill="none" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3"/>
      <path d="M 65 55 L 75 55" stroke="#f59e0b" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  )
};

// Data URI versions for Image component
export const WindowImages = {
  sliding: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='sg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%2393c5fd' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='sf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2360a5fa'/%3E%3Cstop offset='100%25' stop-color='%232563eb'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='20' y='25' width='260' height='150' fill='url(%23sf)' rx='6'/%3E%3Crect x='28' y='33' width='244' height='134' fill='%23f0f9ff' rx='4'/%3E%3Crect x='35' y='40' width='115' height='120' fill='url(%23sg)' stroke='%233b82f6' stroke-width='2.5' rx='2'/%3E%3Crect x='40' y='45' width='22' height='55' fill='%23fff' opacity='0.3' rx='1'/%3E%3Crect x='40' y='105' width='30' height='20' fill='%23fff' opacity='0.2' rx='1'/%3E%3Crect x='150' y='40' width='115' height='120' fill='url(%23sg)' stroke='%233b82f6' stroke-width='2.5' rx='2'/%3E%3Crect x='155' y='45' width='22' height='55' fill='%23fff' opacity='0.3' rx='1'/%3E%3Crect x='230' y='105' width='30' height='20' fill='%23fff' opacity='0.2' rx='1'/%3E%3Cline x1='150' y1='40' x2='150' y2='160' stroke='%231e40af' stroke-width='1.5' opacity='0.5'/%3E%3Crect x='140' y='95' width='6' height='20' fill='%231e3a8a' rx='1.5'/%3E%3Crect x='258' y='95' width='6' height='20' fill='%231e3a8a' rx='1.5'/%3E%3Crect x='28' y='165' width='244' height='7' fill='%2394a3b8' rx='1.5'/%3E%3Crect x='32' y='167' width='236' height='3' fill='%23cbd5e1' rx='0.5'/%3E%3C/svg%3E",
  
  casement: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='cg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e0e7ff' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23a5b4fc' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3ClinearGradient id='cf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23818cf8'/%3E%3Cstop offset='100%25' stop-color='%236366f1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='30' y='25' width='240' height='150' fill='url(%23cf)' rx='6'/%3E%3Crect x='38' y='33' width='224' height='134' fill='%23f5f3ff' rx='4'/%3E%3Crect x='45' y='40' width='205' height='120' fill='url(%23cg)' stroke='%236366f1' stroke-width='3' rx='2'/%3E%3Crect x='52' y='47' width='30' height='60' fill='%23fff' opacity='0.4' rx='1.5'/%3E%3Crect x='90' y='105' width='38' height='27' fill='%23fff' opacity='0.25' rx='1.5'/%3E%3Crect x='190' y='55' width='22' height='40' fill='%23fff' opacity='0.3' rx='1.5'/%3E%3Crect x='43' y='70' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Crect x='43' y='95' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Crect x='43' y='120' width='5' height='15' fill='%234338ca' rx='1.5'/%3E%3Ccircle cx='240' cy='100' r='9' fill='%23312e81'/%3E%3Crect x='231' y='96' width='19' height='8' fill='%23312e81' rx='1.5'/%3E%3Cpath d='M 245 100 Q 275 80 280 65' stroke='%236366f1' stroke-width='1.5' fill='none' opacity='0.4' stroke-dasharray='4,3'/%3E%3C/svg%3E",
  
  bay: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f3e8ff' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23c084fc' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='bf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23a855f7'/%3E%3Cstop offset='100%25' stop-color='%239333ea'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpolygon points='25,42 90,27 90,163 25,148' fill='url(%23bf)'/%3E%3Cpolygon points='31,45 86,32 86,158 31,145' fill='url(%23bg)' stroke='%237c3aed' stroke-width='1.5'/%3E%3Crect x='37' y='50' width='18' height='40' fill='%23fff' opacity='0.3'/%3E%3Crect x='90' y='23' width='120' height='145' fill='url(%23bf)' rx='4'/%3E%3Crect x='97' y='30' width='106' height='131' fill='url(%23bg)' stroke='%237c3aed' stroke-width='2.5' rx='2'/%3E%3Crect x='105' y='38' width='26' height='55' fill='%23fff' opacity='0.4' rx='1.5'/%3E%3Crect x='165' y='95' width='30' height='34' fill='%23fff' opacity='0.3' rx='1.5'/%3E%3Cpolygon points='210,27 275,42 275,148 210,163' fill='url(%23bf)'/%3E%3Cpolygon points='214,32 270,45 270,145 214,158' fill='url(%23bg)' stroke='%237c3aed' stroke-width='1.5'/%3E%3Crect x='232' y='52' width='18' height='40' fill='%23fff' opacity='0.3'/%3E%3Cline x1='150' y1='30' x2='150' y2='161' stroke='%236b21a8' stroke-width='1.5'/%3E%3Cline x1='97' y1='95' x2='203' y2='95' stroke='%236b21a8' stroke-width='1.5'/%3E%3C/svg%3E",
  
  tiltTurn: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='tg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fef3c7' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fbbf24' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='tf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='100%25' stop-color='%23d97706'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='35' y='25' width='230' height='150' fill='url(%23tf)' rx='6'/%3E%3Crect x='43' y='33' width='214' height='134' fill='%23fffbeb' rx='4'/%3E%3Crect x='50' y='40' width='200' height='120' fill='url(%23tg)' stroke='%23f59e0b' stroke-width='3' rx='2'/%3E%3Crect x='57' y='47' width='28' height='50' fill='%23fff' opacity='0.35' rx='1.5'/%3E%3Crect x='150' y='90' width='35' height='30' fill='%23fff' opacity='0.25' rx='1.5'/%3E%3Crect x='140' y='38' width='20' height='6' fill='%2392400e' rx='2'/%3E%3Ccircle cx='150' cy='41' r='4' fill='%23b45309'/%3E%3Crect x='48' y='75' width='5' height='12' fill='%2392400e' rx='1'/%3E%3Crect x='48' y='110' width='5' height='12' fill='%2392400e' rx='1'/%3E%3Crect x='235' y='95' width='8' height='25' fill='%2378350f' rx='2'/%3E%3Ccircle cx='239' cy='107' r='5' fill='%2392400e'/%3E%3Cpath d='M 150 30 L 150 20 M 145 24 L 150 20 L 155 24' stroke='%23f59e0b' stroke-width='1.5' opacity='0.5'/%3E%3C/svg%3E",
  
  doubleGlazed: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='dg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23dbeafe' stop-opacity='0.95'/%3E%3Cstop offset='100%25' stop-color='%237dd3fc' stop-opacity='0.7'/%3E%3C/linearGradient%3E%3ClinearGradient id='df' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%230ea5e9'/%3E%3Cstop offset='100%25' stop-color='%230284c7'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='30' y='25' width='240' height='150' fill='url(%23df)' rx='6'/%3E%3Crect x='40' y='35' width='220' height='130' fill='%23f0f9ff' rx='4'/%3E%3Crect x='48' y='43' width='204' height='114' fill='url(%23dg)' stroke='%230284c7' stroke-width='3.5' rx='2'/%3E%3Crect x='52' y='47' width='196' height='106' fill='none' stroke='%2338bdf8' stroke-width='1.5' stroke-dasharray='3,2' opacity='0.5' rx='1'/%3E%3Crect x='58' y='53' width='32' height='45' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='110' y='110' width='40' height='25' fill='%23fff' opacity='0.25' rx='2'/%3E%3Crect x='200' y='60' width='25' height='35' fill='%23fff' opacity='0.3' rx='2'/%3E%3Cline x1='150' y1='43' x2='150' y2='157' stroke='%230369a1' stroke-width='2'/%3E%3Crect x='147' y='95' width='6' height='15' fill='%23075985' rx='1'/%3E%3Crect x='44' y='97' width='212' height='3' fill='%23cbd5e1' opacity='0.6'/%3E%3Ccircle cx='70' cy='70' r='12' fill='%2310b981' opacity='0.2'/%3E%3Ctext x='70' y='75' font-size='12' font-weight='bold' fill='%23059669' text-anchor='middle'%3EE%3C/text%3E%3C/svg%3E",
  
  msSteel: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='stg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23e2e8f0' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%2394a3b8' stop-opacity='0.6'/%3E%3C/linearGradient%3E%3ClinearGradient id='stf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2364748b'/%3E%3Cstop offset='100%25' stop-color='%23475569'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='25' y='20' width='250' height='160' fill='url(%23stf)' rx='3'/%3E%3Crect x='35' y='30' width='230' height='140' fill='%23cbd5e1' rx='2'/%3E%3Crect x='42' y='37' width='108' height='126' fill='url(%23stg)' stroke='%23475569' stroke-width='4' rx='1'/%3E%3Crect x='150' y='37' width='108' height='126' fill='url(%23stg)' stroke='%23475569' stroke-width='4' rx='1'/%3E%3Crect x='50' y='45' width='25' height='50' fill='%23fff' opacity='0.25' rx='1'/%3E%3Crect x='158' y='45' width='25' height='50' fill='%23fff' opacity='0.25' rx='1'/%3E%3Ccircle cx='40' cy='35' r='3' fill='%231e293b'/%3E%3Ccircle cx='260' cy='35' r='3' fill='%231e293b'/%3E%3Ccircle cx='40' cy='165' r='3' fill='%231e293b'/%3E%3Ccircle cx='260' cy='165' r='3' fill='%231e293b'/%3E%3Crect x='42' y='97' width='216' height='6' fill='%23475569'/%3E%3Cline x1='42' y1='100' x2='258' y2='100' stroke='%2364748b' stroke-width='1'/%3E%3Crect x='147' y='37' width='6' height='126' fill='%23475569'/%3E%3Cline x1='150' y1='37' x2='150' y2='163' stroke='%2364748b' stroke-width='1'/%3E%3C/svg%3E",
  
  industrial: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='ig' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f1f5f9' stop-opacity='0.7'/%3E%3Cstop offset='100%25' stop-color='%23cbd5e1' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='if' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23374151'/%3E%3Cstop offset='100%25' stop-color='%231f2937'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='20' y='15' width='260' height='170' fill='url(%23if)' rx='2'/%3E%3Crect x='28' y='23' width='244' height='154' fill='%234b5563' rx='1'/%3E%3Crect x='35' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='107' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='179' y='30' width='72' height='140' fill='url(%23ig)' stroke='%231f2937' stroke-width='5' rx='0.5'/%3E%3Crect x='43' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Crect x='115' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Crect x='187' y='38' width='20' height='45' fill='%23fff' opacity='0.2' rx='0.5'/%3E%3Ccircle cx='35' cy='30' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='251' cy='30' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='35' cy='170' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Ccircle cx='251' cy='170' r='4' fill='%23111827' stroke='%236b7280' stroke-width='1'/%3E%3Crect x='35' y='65' width='216' height='4' fill='%231f2937'/%3E%3Crect x='35' y='130' width='216' height='4' fill='%231f2937'/%3E%3Crect x='25' y='180' width='250' height='3' fill='%23fbbf24' opacity='0.7'/%3E%3C/svg%3E",
  
  designer: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='desg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23fef3c7' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%23fcd34d' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3ClinearGradient id='desf' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%2318181b'/%3E%3Cstop offset='100%25' stop-color='%2309090b'/%3E%3C/linearGradient%3E%3ClinearGradient id='gold' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='%23f59e0b'/%3E%3Cstop offset='50%25' stop-color='%23fbbf24'/%3E%3Cstop offset='100%25' stop-color='%23f59e0b'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='35' y='25' width='230' height='150' fill='url(%23desf)' rx='8'/%3E%3Crect x='40' y='30' width='220' height='140' fill='%23fefce8' rx='6'/%3E%3Crect x='47' y='37' width='100' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='147' y='37' width='100' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='47' y='100' width='200' height='63' fill='url(%23desg)' stroke='%2318181b' stroke-width='2' rx='3'/%3E%3Crect x='54' y='44' width='28' height='40' fill='%23fff' opacity='0.4' rx='2'/%3E%3Crect x='154' y='44' width='28' height='40' fill='%23fff' opacity='0.4' rx='2'/%3E%3Crect x='60' y='110' width='35' height='35' fill='%23fff' opacity='0.35' rx='2'/%3E%3Crect x='40' y='29' width='220' height='2' fill='url(%23gold)'/%3E%3Crect x='40' y='169' width='220' height='2' fill='url(%23gold)'/%3E%3Crect x='235' y='95' width='3' height='30' fill='%23f59e0b' rx='1.5'/%3E%3Ccircle cx='236.5' cy='110' r='5' fill='%23fbbf24' opacity='0.8'/%3E%3Ccircle cx='70' cy='55' r='10' fill='none' stroke='%23f59e0b' stroke-width='1.5' opacity='0.3'/%3E%3Cpath d='M 65 55 L 75 55' stroke='%23f59e0b' stroke-width='1.5' opacity='0.3'/%3E%3C/svg%3E"
};
