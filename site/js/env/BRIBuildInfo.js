'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-24 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1402';
    this._commitGIT = '91bea00d3333f2217f784c68dabf004c9a11d340';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}