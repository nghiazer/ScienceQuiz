import { Component, type ReactNode } from 'react'
import LoadingOverlay from './LoadingOverlay'

interface State {
  failed: boolean
}

/**
 * Bắt lỗi khi một màn hình tách riêng (React.lazy) không tải được (mất mạng…):
 * hiện thông báo và nút tải lại trang thay vì để trang trắng. Tiến độ đã lưu trong localStorage nên không mất gì.
 */
export default class ScreenBoundary extends Component<{ children: ReactNode }, State> {
  state: State = { failed: false }

  static getDerivedStateFromError(): State {
    return { failed: true }
  }

  render() {
    if (this.state.failed) return <LoadingOverlay state="error" onRetry={() => window.location.reload()} />
    return this.props.children
  }
}
