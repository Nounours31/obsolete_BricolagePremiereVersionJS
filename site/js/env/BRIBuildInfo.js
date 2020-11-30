'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-30 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2159';
    this._commitGIT = '30c421cda6370010c54a6e05e240fae554d42860';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}