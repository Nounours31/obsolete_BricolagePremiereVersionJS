'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-04 08:00:05';
    this._versionBuild = 'jenkins-Bricolage-835';
    this._commitGIT = '1dae543d042acfd35131578edef08a2d6e905929';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}