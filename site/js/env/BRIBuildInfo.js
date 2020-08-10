'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-10 20:00:10';
    this._versionBuild = 'jenkins-Bricolage-1714';
    this._commitGIT = '6f6c44632a48072ac38ac7fad4b32c1f9346cd39';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}