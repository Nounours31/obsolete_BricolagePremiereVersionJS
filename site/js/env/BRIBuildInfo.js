'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-01 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-457';
    this._commitGIT = 'acaa9774a07bf829bbf81900a8f2997e87aeb72e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}