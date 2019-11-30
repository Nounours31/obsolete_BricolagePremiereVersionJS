'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-30 16:00:04';
    this._versionBuild = 'jenkins-Bricolage-697';
    this._commitGIT = 'b574713fe78c38caadf1d887ce733f99be686020';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}