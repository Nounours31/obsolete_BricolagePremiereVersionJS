'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-30 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2037';
    this._commitGIT = '483337e612c8a995800761c4e2e23bae366a68fb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}