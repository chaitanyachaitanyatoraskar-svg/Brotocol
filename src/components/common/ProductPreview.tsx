import React from 'react';
import {
  BellRing,
  CheckCircle2,
  Database,
  ExternalLink,
  Layers,
  QrCode,
  ShieldCheck,
  Smartphone,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react';
import type { ProjectPreviewKind } from '@/data/projects';

interface ProductPreviewProps {
  kind: ProjectPreviewKind;
  compact?: boolean;
}

/**
 * Composed interface and product previews explicitly labeled as previews/demos.
 * Used where live client deployments or physical studio photos are not yet supplied.
 */
export const ProductPreview: React.FC<ProductPreviewProps> = ({
  kind,
  compact = false,
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F1F5F9]/75 ${
        compact ? 'p-4' : 'p-6 sm:p-8'
      }`}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#AFEAEA] bg-[#EEFCFC] px-2.5 py-0.5 text-[11px] font-medium text-[#0D7F80]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#0D7F80]" />
          Interface &amp; Product Preview
        </span>
        <span className="text-[11px] font-medium text-[#64748B]">BROTOCOL</span>
      </div>

      {kind === 'qr-ordering' && (
        <div className="grid gap-3 sm:grid-cols-2">
          {/* Customer table view */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-3.5 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
              <div className="flex items-center gap-1.5">
                <QrCode className="h-3.5 w-3.5 text-[#0D7F80]" />
                <span className="text-xs font-semibold text-[#020617]">
                  Table 04 · Guest Menu
                </span>
              </div>
              <span className="rounded bg-[#E0F7F7] px-1.5 py-0.5 text-[10px] font-medium text-[#0D7F80]">
                No App
              </span>
            </div>
            <div className="mt-2.5 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-[#F1F5F9] px-2.5 py-2">
                <div>
                  <p className="text-xs font-medium text-[#020617]">
                    Sample Dish Entry A
                  </p>
                  <p className="text-[10px] text-[#64748B]">Category · Veg</p>
                </div>
                <span className="rounded-md bg-[#0D7F80] px-2 py-0.5 text-[10px] font-semibold text-white">
                  Qty 2
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#E2E8F0] px-2.5 py-2">
                <div>
                  <p className="text-xs font-medium text-[#020617]">
                    Sample Beverage B
                  </p>
                  <p className="text-[10px] text-[#64748B]">No sugar note</p>
                </div>
                <span className="rounded-md bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-semibold text-[#020617]">
                  Qty 1
                </span>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-[#64748B]">
                <BellRing className="h-3 w-3 text-[#0D7F80]" />
                Call Waiter
              </span>
              <span className="rounded-full bg-[#0D7F80] px-2.5 py-1 text-[10px] font-semibold text-white">
                Submit Order
              </span>
            </div>
          </div>

          {/* Kitchen KOT board */}
          <div className="rounded-xl border border-[#020617] bg-[#020617] p-3.5 text-white">
            <div className="flex items-center justify-between border-b border-white/12 pb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold">
                <UtensilsCrossed className="h-3.5 w-3.5 text-[#AFEAEA]" />
                KOT Kitchen Queue
              </span>
              <span className="rounded bg-[#0D7F80] px-1.5 py-0.5 text-[10px] font-bold text-white">
                SYNCED
              </span>
            </div>
            <div className="mt-2.5 space-y-2">
              <div className="rounded-lg bg-white/8 p-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold">KOT #104 · Table 04</span>
                  <span className="text-[#AFEAEA]">Preparing</span>
                </div>
                <p className="mt-1 text-[10px] text-[#94A3B8]">
                  2× Dish A · 1× Beverage B
                </p>
              </div>
              <div className="rounded-lg bg-white/5 p-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-semibold">KOT #103 · Table 02</span>
                  <span className="text-[#E0F7F7]">Ready</span>
                </div>
                <p className="mt-1 text-[10px] text-[#94A3B8]">
                  Counter notified
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {kind === 'nfc-review' && (
        <div className="grid items-center gap-3 sm:grid-cols-2">
          {/* Physical card representation */}
          <div className="flex flex-col justify-between rounded-xl bg-[#020617] p-4 text-white shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-widest text-[#AFEAEA] uppercase">
                BROTOCOL SMART
              </span>
              <Wifi className="h-4 w-4 rotate-90 text-[#AFEAEA]" />
            </div>
            <div className="my-4">
              <p className="font-display text-sm font-bold">
                Google Review NFC Card
              </p>
              <p className="mt-1 text-[11px] text-[#94A3B8]">
                Tap smartphone or scan QR code
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-white/12 pt-2.5 text-[10px] text-[#E0F7F7]">
              <span>NDEF + Dynamic QR</span>
              <QrCode className="h-5 w-5 text-[#AFEAEA]" />
            </div>
          </div>

          {/* Smartphone destination preview */}
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-3.5">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] pb-2">
              <Smartphone className="h-3.5 w-3.5 text-[#0D7F80]" />
              <span className="text-xs font-semibold text-[#020617]">
                Mobile Browser Flow
              </span>
            </div>
            <ol className="mt-2.5 space-y-2 text-[11px] text-[#64748B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0D7F80]" />
                <span>Customer taps card at counter</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#0D7F80]" />
                <span>Opens genuine Google Review page</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#0D7F80]" />
                <span>No review gating or app required</span>
              </li>
            </ol>
          </div>
        </div>
      )}

      {kind === 'menu-stand' && (
        <div className="grid items-center gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
            <div className="mx-auto flex max-w-[170px] flex-col items-center rounded-lg border-2 border-[#0D7F80] bg-[#020617] p-3 text-center text-white">
              <span className="text-[10px] font-semibold tracking-wider text-[#AFEAEA] uppercase">
                Tap or Scan
              </span>
              <div className="my-2.5 rounded-md bg-white p-2 text-[#020617]">
                <QrCode className="h-10 w-10" />
              </div>
              <span className="text-[11px] font-medium">
                Digital Menu Stand
              </span>
            </div>
            <div className="mx-auto h-2 w-32 rounded-b-md bg-[#0D7F80]/30" />
          </div>

          <div className="rounded-xl border border-[#E2E8F0] bg-white p-3.5">
            <p className="text-xs font-semibold text-[#020617]">
              Tabletop Digital Hub
            </p>
            <p className="mt-1 text-[11px] text-[#64748B]">
              Single touchpoint on every dining table:
            </p>
            <div className="mt-2.5 space-y-1.5">
              {['Digital Menu Categories', 'Google Review Destination', 'Official Social Links'].map(
                (label) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg bg-[#EEFCFC] px-2.5 py-1.5 text-[11px] font-medium text-[#020617] ring-1 ring-[#AFEAEA]/60"
                  >
                    <span>{label}</span>
                    <ExternalLink className="h-3 w-3 text-[#0D7F80]" />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {kind === 'business-system' && (
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-3.5">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#020617]">
              <Database className="h-3.5 w-3.5 text-[#0D7F80]" />
              Internal Operations Portal
            </span>
            <span className="rounded-full bg-[#E0F7F7] px-2 py-0.5 text-[10px] font-medium text-[#0D7F80]">
              Role-Based Access
            </span>
          </div>
          <div className="mt-3 space-y-2">
            {[
              { ref: 'REC-01', module: 'Client & Order Records', state: 'Validated' },
              { ref: 'REC-02', module: 'Approval & Task Queue', state: 'Assigned' },
              { ref: 'REC-03', module: 'Structured Audit Trail', state: 'Logged' },
            ].map((row) => (
              <div
                key={row.ref}
                className="flex items-center justify-between rounded-lg bg-[#F1F5F9] px-3 py-2 text-[11px]"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-semibold text-[#64748B]">
                    {row.ref}
                  </span>
                  <span className="font-medium text-[#020617]">{row.module}</span>
                </div>
                <span className="rounded bg-[#0D7F80] px-2 py-0.5 text-[10px] font-semibold text-white">
                  {row.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {kind === 'workflow-automation' && (
        <div className="rounded-xl border border-[#E2E8F0] bg-white p-3.5">
          <div className="flex items-center justify-between border-b border-[#E2E8F0] pb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#020617]">
              <Layers className="h-3.5 w-3.5 text-[#0D7F80]" />
              Automation Pipeline Architecture
            </span>
            <span className="text-[10px] font-medium text-[#64748B]">
              Deterministic + Logged
            </span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { step: '01 Trigger', title: 'Form / Webhook' },
              { step: '02 Validate', title: 'Schema & DB' },
              { step: '03 Route', title: 'Team Alert' },
            ].map((node) => (
              <div
                key={node.step}
                className="rounded-lg border border-[#AFEAEA] bg-[#EEFCFC] p-2.5"
              >
                <p className="text-[10px] font-semibold text-[#0D7F80]">
                  {node.step}
                </p>
                <p className="mt-1 text-[11px] font-medium text-[#020617]">
                  {node.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
