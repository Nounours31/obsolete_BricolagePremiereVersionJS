'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-25 20:00:14';
    this._versionBuild = 'jenkins-Bricolage-186';
    this._commitGIT = 'a684a5f416678fe859222542c319de9ff4b924f5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}