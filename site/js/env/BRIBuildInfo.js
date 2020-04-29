'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-04-29 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1300';
    this._commitGIT = 'e30d28554014a906477dd15345af61aa8e237c1c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}