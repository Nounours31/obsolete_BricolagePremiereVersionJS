'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-26 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-2020';
    this._commitGIT = '16067f9c89c5584489f5994b53c3418117d714fc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}