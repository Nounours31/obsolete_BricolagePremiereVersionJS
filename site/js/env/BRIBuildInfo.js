'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-10 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-1224';
    this._commitGIT = '401dc216e3ea2946530b29eca1a02117e8233a42';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}