'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-31 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1430';
    this._commitGIT = '52d81def182c8f7d4a5a8bf6da33eb9a54fac042';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}