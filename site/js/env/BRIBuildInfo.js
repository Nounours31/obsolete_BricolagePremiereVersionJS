'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-12-21 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-779';
    this._commitGIT = 'fbe28725537944498e5b9317e96b9f6cb41182f7';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}