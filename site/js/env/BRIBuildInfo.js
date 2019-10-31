'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-31 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-578';
    this._commitGIT = '3715fb2abfb7ec1ecdd2dc8e99fa300a0a342e2f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}