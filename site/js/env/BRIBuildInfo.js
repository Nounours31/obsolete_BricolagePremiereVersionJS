'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-27 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1658';
    this._commitGIT = '22c0a879609026683ba2a45a1db64bcc5955f098';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}