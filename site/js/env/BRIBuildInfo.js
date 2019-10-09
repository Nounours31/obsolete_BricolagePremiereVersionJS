'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-09 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-487';
    this._commitGIT = 'fd8307fd68b36591cacee0ab023b21daf789b957';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}