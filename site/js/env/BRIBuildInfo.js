'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-15 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-1003';
    this._commitGIT = 'c1e74036cfa134a975cfede01435bc7a31398e03';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}