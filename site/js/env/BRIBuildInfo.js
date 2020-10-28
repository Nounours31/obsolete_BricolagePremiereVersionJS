'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-28 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-2027';
    this._commitGIT = 'b4cc7fcbb8fcea7c94ed80f766294a795955644b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}