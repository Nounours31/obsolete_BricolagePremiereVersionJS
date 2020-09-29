'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-29 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1913';
    this._commitGIT = '0e3273fe4af543a0d2dc27e10626ca48b2212013';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}