'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-05 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1080';
    this._commitGIT = '9a2fe41fac6ba653e10e53bbcd18688a78eacedc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}